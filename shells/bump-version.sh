#!/bin/bash

# エラーが発生したら即座に終了
set -e

# GitHub CLIがインストールされているか確認
if ! command -v gh &>/dev/null; then
	echo "エラー: GitHub CLI (gh) がインストールされていません"
	echo "インストール方法: https://cli.github.com/manual/installation"
	exit 1
fi

# GitHub CLIにログインしているか確認
if ! gh auth status &>/dev/null; then
	echo "エラー: GitHub CLIにログインしていません"
	echo "ログイン方法: gh auth login"
	exit 1
fi

# Gitの文字エンコーディング設定
git config --local i18n.commitEncoding UTF-8
git config --local i18n.logOutputEncoding UTF-8
export LANG=ja_JP.UTF-8
export LC_ALL=ja_JP.UTF-8

# OS判定
if [[ "$OSTYPE" == "darwin"* ]]; then
	# macOSの場合
	SED_CMD="sed -i ''"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
	# Linuxの場合
	SED_CMD="sed -i"
else
	echo "未対応のOSです: $OSTYPE"
	exit 1
fi

# 現在のバージョンを取得
CURRENT_VERSION=$(node -p "require('./package.json').version")
if [ -z "$CURRENT_VERSION" ]; then
	echo "エラー: package.jsonからバージョンを取得できませんでした"
	exit 1
fi

# バージョンを分解
IFS='.' read -r MAJOR MINOR PATCH <<<"$CURRENT_VERSION"

# パッチバージョンを+1
NEW_VERSION="${MAJOR}.${MINOR}.$((PATCH + 1))"

echo "現在のバージョン: $CURRENT_VERSION"
echo "新しいバージョン: $NEW_VERSION"

# タグの存在確認
if git rev-parse "v$NEW_VERSION" >/dev/null 2>&1; then
	echo "エラー: タグ v$NEW_VERSION は既に存在します"
	exit 1
fi

# package.jsonを更新
if [[ "$OSTYPE" == "darwin"* ]]; then
	# macOSの場合
	sed -i '' "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json
else
	# Linuxの場合
	sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json
fi

# 変更をコミット
git add package.json
git commit --allow-empty -m "Update version to $NEW_VERSION" --no-edit
git push origin main

# タグを発行
git tag "v$NEW_VERSION"
git push origin "v$NEW_VERSION"

# GitHub Releaseを作成
gh release create "v$NEW_VERSION" \
	--title "Release v$NEW_VERSION" \
	--notes "Version $NEW_VERSION release" \
	--target main

echo "✅ バージョンを$CURRENT_VERSIONから$NEW_VERSIONに更新し、タグとリリースを発行しました。"
