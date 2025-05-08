#!/bin/bash

# 現在のバージョンを取得
CURRENT_VERSION=$(node -p "require('./package.json').version")

# バージョンを分解
IFS='.' read -r MAJOR MINOR PATCH <<<"$CURRENT_VERSION"

# パッチバージョンを+1
NEW_VERSION="${MAJOR}.${MINOR}.$((PATCH + 1))"

# package.jsonを更新
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" package.json

# 変更をコミット
git add package.json
git commit -m "バージョンを$CURRENT_VERSIONから$NEW_VERSIONに更新"
git push origin main

# タグを発行
git tag "v$NEW_VERSION"
git push origin "v$NEW_VERSION"

echo "バージョンを$CURRENT_VERSIONから$NEW_VERSIONに更新し、タグを発行しました。"
