# Dev Docs

このドキュメントは柔軟に適時更新していきます

## 基本環境構築

### .env ファイルの配置

```sh
cp -p .env.example .env
```

### pnpm

```sh
# npmを使ってpnpmをグローバルにインストール
npm install -g pnpm

# または Macの場合、Homebrewを使用
brew install pnpm
```

#### pnpm Docs

[pnpm Official](https://pnpm.io/)
[pnpm Installation](https://pnpm.io/installation)

### Biome のインストール

```sh
pnpm add -g @biome/cli
```

### 依存パッケージのインストール

```sh
pnpm install
```

## Scripts

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "format": "biome format --write .",
    "lint": "biome lint --write ./src",
    "fix": "pnpm run lint && pnpm run format",
    "preview": "vite preview",
    "sb": "storybook dev -p 6006",
    "sb-build": "storybook build",
    "build-all": "pnpm run build && pnpm run sb-build",
    "prepare": "husky"
  },
```

## プライベートパッケージのインストール方法

このパッケージは制限付きアクセスで公開されており、BoxPistols組織のメンバーまたは特別に許可された組織のメンバーのみがアクセスできます。

### 1. 認証設定

プロジェクトのルートディレクトリに`.npmrc`ファイルを作成し、以下の内容を追加します：

```bash
@boxpistols:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. GitHub個人アクセストークンの設定

1. GitHubで[個人アクセストークン](https://github.com/settings/tokens)を作成します（`read:packages`スコープが必要）
2. 環境変数として設定するか、`.npmrc`ファイルの`${GITHUB_TOKEN}`を実際のトークンに置き換えます

### 3. パッケージのインストール

```sh
# pnpmを使用する場合
pnpm add @boxpistols/react-map-vite

# npmを使用する場合
npm install @boxpistols/react-map-vite

# yarnを使用する場合
yarn add @boxpistols/react-map-vite
```

## 自動バージョン更新とリリース

このリポジトリでは、特定の命名規則に従ったブランチからのPRを作成すると、自動的にバージョン更新とリリースが行われます。

### 自動化の流れ

1. `update/xxx`という名前のブランチを作成して作業
2. PRを作成すると自動的にパッチバージョンが更新される
3. PRがマージされると自動的にタグとリリースが作成される
4. リリースが作成されると自動的にパッケージが公開される

### 具体的な手順

#### 1. 機能開発用ブランチの作成

```sh
# mainブランチから新しいブランチを作成
git checkout main
git pull
git checkout -b update/機能名
```

> **重要**: ブランチ名は必ず `update/` で始める必要があります

#### 2. 開発作業とコミット

```sh
# コードを変更
git add .
git commit -m "機能の説明"
git push origin update/機能名
```

#### 3. PRの作成

GitHubでPRを作成すると、自動的に以下が実行されます：

- パッチバージョンが自動的に更新される（例: 0.0.10 → 0.0.11）
- package.jsonが更新され、PRにコメントが追加される

#### 4. PRのレビューとマージ

PRがマージされると、自動的に以下が実行されます：

- タグが作成される（例: v0.0.11）
- GitHubリリースが作成される
- パッケージが新しいバージョンでGitHub Packagesに公開される

### 注意事項

- 複数の`update/`ブランチからのPRが同時に進行すると、バージョン競合が発生する可能性があります
- マイナーバージョン（0.1.0）やメジャーバージョン（1.0.0）への更新が必要な場合は、PRを作成する前に手動でpackage.jsonを更新してください
- CIワークフローの詳細は`.github/workflows/`ディレクトリ内のYAMLファイルを参照してください

### 主なターミナル実行コマンド

#### ローカル開発サーバを起動

```sh
pnpm dev
```

#### Lintチェック

```sh
pnpm lint
```

#### ファイルの整形と自動改善

```sh
pnpm fix
```

#### プロダクション用ビルド

```sh
pnpm run build
```

#### Storybook

```sh
pnpm sb
```

### Node 管理

Node.jsのバージョン管理にはVoltaを推奨します

```sh
# install Volta
$ curl https://get.volta.sh | bash
# or
$ brew install volta
$ volta setup
$ cat ~/.zshrc（各自の環境ファイル）

export VOLTA_HOME="$HOME/.volta"
export PATH="$VOLTA_HOME/bin:$PATH"

```

#### Volta ドキュメント

- [Volta のインストールと使い方 #Node.js - Qiita](https://qiita.com/YoshinoriKanno/items/1a41b840a68dea2fb7e7)
- <https://volta.sh/>
- [brew install voltahttps://formulae.brew.sh/formula/volta](https://formulae.brew.sh/formula/volta)

## 自動整形

### VSCode 拡張ツール

- Biome <https://marketplace.visualstudio.com/items?itemName=biomejs.biome>
- ErrorLens <https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens>
- MarkdownLint <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
- 他 .vscode/extensions.json 参照

VSCode 拡張検索枠に @recommended を入力すると、この開発環境に必要な拡張機能が表示されます

![Code 2024-07-10 20 59 57](https://github.com/BoxPistols/react-drone-vite/assets/10333049/518a259e-09eb-43cc-8e3b-9b841226fcaa)

#### VSCode 設定

基本的に上記拡張ツール２点入れると使えるはずですが、`Cmd + S`で自動整形されない、動かない場合は以下を確認

- `Cmd + Shift + P` 「フォーマット」
- フォーマットを Biome に選択、既定ツールにする
- `Cmd + ,（カンマ）`
- ワークスペース
- Formt on Save をオン

### 運用

#### コミット・プッシュ前に

- `pnpm run fix`で全ファイル一括整形+自動改善可能なものは自動改善
- この操作を習慣づけることで個々の書式による差分がなくなり、エラー検知も常時行える
- 動的な箇所の変更などで挙動やデプロイの懸念がある場合は`pnpm run build`を実行し、エラーが無いか確認する

↑

##### husky にて自動化

もし`git commit`を実行した時に自動で`pnpm run fix`が走らなければ Local に husky が入っていません。その時は以下の操作をして husky を入れてください

```sh
pnpm run prepare
# or
pnpm add -D husky
pnpm dlx husky install
chmod -R +x .husky
```

pnpm、`git commit`を実行して`pnpm run fix`が走っているか確認してください

## React + TypeScript + Vite + Biome

- [React 公式ドキュメント](https://ja.react.dev/blog/2023/03/16/introducing-react-dev/)：React の基本概念、チュートリアル、API リファレンスなど
- [TypeScript ハンドブック](https://www.typescriptlang.org/)：TypeScript の言語機能、ベストプラクティス、サンプルコードなど
- [Vite 公式ドキュメント](https://ja.vitejs.dev/)：Vite の設定、プラグイン、ビルドオプションなど
- [Biome 公式ドキュメント](https://biomejs.dev/ja)：Biome の設定、ルール、オプション設定など
