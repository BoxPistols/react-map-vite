# Dev Docs

このドキュメントは柔軟に適時更新していきます

2025/03/14

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

### ESLint と Prettier のインストール

```sh
# プロジェクトに ESLint と Prettier を追加
pnpm add -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser
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
    "format": "prettier --write \"src/**/*.{ts,tsx,js,jsx,json,css,scss}\"",
    "lint": "eslint \"src/**/*.{ts,tsx,js,jsx}\" --fix",
    "fix": "pnpm run lint && pnpm run format",
    "preview": "vite preview",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "build-all": "pnpm run build && pnpm run build-storybook",
    "prepare": "husky install"
  },
```

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
pnpm storybook
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
- [brew install volta](https://formulae.brew.sh/formula/volta)

## 自動整形

### VSCode 拡張ツール

- ESLint <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
- Prettier <https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>
- ErrorLens <https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens>
- MarkdownLint <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
- 他 .vscode/extensions.json 参照

VSCode 拡張検索枠に @recommended を入力すると、この開発環境に必要な拡張機能が表示されます

![Code 2024-07-10 20 59 57](https://github.com/BoxPistols/react-drone-vite/assets/10333049/518a259e-09eb-43cc-8e3b-9b841226fcaa)

#### VSCode 設定

基本的に上記拡張ツールを入れると使えるはずですが、`Cmd + S`で自動整形されない、動かない場合は以下を確認

- `Cmd + Shift + P` 「フォーマット」
- フォーマットを Prettier に選択、既定ツールにする
- `Cmd + ,（カンマ）`
- ワークスペース
- Format On Save をオン

### 運用フロー

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

## React + TypeScript + Vite + ESLint + Prettier

- [React 公式ドキュメント](https://ja.react.dev/blog/2023/03/16/introducing-react-dev/)：React の基本概念、チュートリアル、API リファレンスなど
- [TypeScript ハンドブック](https://www.typescriptlang.org/)：TypeScript の言語機能、ベストプラクティス、サンプルコードなど
- [Vite 公式ドキュメント](https://ja.vitejs.dev/)：Vite の設定、プラグイン、ビルドオプションなど
- [ESLint 公式ドキュメント](https://eslint.org/)：ESLint の設定、ルール、プラグインなど
- [Prettier 公式ドキュメント](https://prettier.io/)：Prettier の設定、オプション、インテグレーションなど

---

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

このリポジトリでは、タグを手動で発行し、CI/CDによってパッケージが自動的に公開されます。

### リリースの流れ

1. 開発作業を完了し、mainブランチにマージする
2. 手動でタグを発行する
3. タグ発行をトリガーにCI/CDが走り、パッケージが自動的に公開される

### 具体的な手順

#### 1. 機能開発用ブランチの作成

```sh
# mainブランチから新しいブランチを作成
git checkout main
git pull
git checkout -b feature/機能名
```

#### 2. 開発作業とコミット

```sh
# コードを変更
git add .
git commit -m "機能の説明"
git push origin feature/機能名
```

#### 3. PRの作成とマージ

GitHubでPRを作成し、レビュー後にマージします。

#### 4. タグの発行

mainブランチにマージ後、以下のコマンドでタグを発行します。

```sh
git fetch --tags
git tag v0.0.12  # バージョン番号は適宜変更してください
git push origin v0.0.12
```

#### 5. パッケージの公開

タグをプッシュすると、CI/CDが自動的に走り、パッケージがGitHub Packagesに公開されます。

## @boxpistols/react-map-vite パッケージの公開と管理

### 1. バージョン管理

#### 自動バージョン更新

- `update/*` ブランチから PR を作成すると、自動的にパッチバージョンが更新されます
- 例: `0.0.10` → `0.0.11`

```bash
# バージョンの確認
node -p "require('./package.json').version"
```

### 2. パッケージの公開

#### 2.1 認証設定

1. `.env.local`ファイルの作成（`.gitignore`に追加）:

```plaintext
GITHUB_TOKEN=your_github_token_here
```

2. `.npmrc`の設定（リポジトリにコミット）:

```plaintext
@boxpistols:registry=https://npm.pkg.github.com
```

3. 環境変数の読み込み:

```bash
# シェルに環境変数を設定
source .env.local

# または直接エクスポート
export GITHUB_TOKEN=your_github_token_here
```

> 注意: `.npmrc.local`は非推奨となり、代わりに`.env.local`を使用します。

#### 2.2 パッケージの公開手順

```bash
# 1. 現在のバージョンを確認
npm view @boxpistols/react-map-vite versions --registry=https://npm.pkg.github.com

# 2. パッケージを公開
npm publish --access restricted
```

### 3. トラブルシューティング

#### 3.1 認証エラー

```bash
# 認証状態の確認
npm whoami --registry=https://npm.pkg.github.com

# トークンの再設定
export GITHUB_TOKEN=your_github_token
```

#### 3.2 バージョンの同期エラー

パッケージのバージョンが同期されていない場合（例：GitHub上は`v0.0.11`だが、npm registryは`0.0.10`）：

1. **バージョンの確認**:

```bash
# package.jsonのバージョン
node -p "require('./package.json').version"

# 公開済みバージョン
npm view @boxpistols/react-map-vite versions --registry=https://npm.pkg.github.com
```

2. **強制的な再公開**:

```bash
# キャッシュのクリア
npm cache clean --force

# パッケージの再公開
npm publish --access restricted --force
```

#### 3.3 インストールエラー

パッケージのインストールに問題がある場合：

1. **認証設定の確認**:

```bash
# プロジェクトの.npmrcファイル
@boxpistols:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

2. **キャッシュのクリア**:

```bash
npm cache clean --force
```

3. **特定バージョンのインストール**:

```bash
# 最新バージョン
npm install @boxpistols/react-map-vite@latest

# 特定のバージョン
npm install @boxpistols/react-map-vite@0.0.11
```

### 4. CI/CD

#### 4.1 自動パブリッシュ

PRがマージされると以下が自動的に実行されます：

1. バージョンの更新（`update/*` ブランチの場合）
2. タグの作成
3. リリースの作成
4. パッケージの公開

#### 4.2 手動パブリッシュ

GitHub Actionsで手動パブリッシュも可能：

1. Actions タブを開く
2. "手動パッケージ公開" ワークフローを選択
3. "Run workflow" をクリック
4. バージョンを入力して実行

### 5. ベストプラクティス

1. **バージョン管理**:

   - セマンティックバージョニングに従う
   - 破壊的変更は必ずメジャーバージョンを上げる

2. **開発フロー**:

   - 機能追加は `update/*` ブランチから
   - PRマージ後に自動パブリッシュ
   - 緊急修正は手動パブリッシュを使用

3. **セキュリティ**:

   - GitHub Tokenは定期的に更新
   - `.npmrc.local` は `.gitignore` に追加

4. **トラブルシューティング**:
   - エラー時は必ずログを確認
   - バージョンの整合性を確認
   - 必要に応じて手動で再公開

---

## 手動でタグを作成する場合

以下のように手動でタグを作成する場合は以下のコマンドを実行してください

```bash
git fetch --tags
git tag v0.0.12
git push origin v0.0.12
```

## 自動バージョン更新とタグ発行

`shells/bump-version.sh`スクリプトを使用すると、package.jsonのバージョンを自動で+1し、タグを発行できます。

### 使い方

1. スクリプトに実行権限を付与します。

```sh
chmod +x shells/bump-version.sh
```

2. スクリプトを実行します。

```sh
./shells/bump-version.sh
```

### 動作内容

- package.jsonのバージョンが自動で+1されます（例：0.0.12 → 0.0.13）
- 変更がコミット・プッシュされます
- タグが発行されます（例：v0.0.13）

### 注意事項

- このスクリプトは、パッチバージョン（0.0.x）のみを自動で+1します
- マイナーバージョン（0.x.0）やメジャーバージョン（x.0.0）の更新は、手動で行う必要があります
