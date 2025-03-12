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

+ [Volta のインストールと使い方 #Node.js - Qiita](https://qiita.com/YoshinoriKanno/items/1a41b840a68dea2fb7e7)
+ <https://volta.sh/>
+ [brew install voltahttps://formulae.brew.sh/formula/volta](https://formulae.brew.sh/formula/volta)

## 自動整形

### VSCode 拡張ツール

+ Biome <https://marketplace.visualstudio.com/items?itemName=biomejs.biome>
+ ErrorLens <https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens>
+ MarkdownLint <https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint>
+ 他 .vscode/extensions.json 参照

VSCode 拡張検索枠に @recommended を入力すると、この開発環境に必要な拡張機能が表示されます

![Code 2024-07-10 20 59 57](https://github.com/BoxPistols/react-drone-vite/assets/10333049/518a259e-09eb-43cc-8e3b-9b841226fcaa)

#### VSCode 設定

基本的に上記拡張ツール２点入れると使えるはずですが、`Cmd + S`で自動整形されない、動かない場合は以下を確認

+ `Cmd + Shift + P` 「フォーマット」
+ フォーマットを Biome に選択、既定ツールにする
+ `Cmd + ,（カンマ）`
+ ワークスペース
+ Formt on Save をオン

### 運用

#### コミット・プッシュ前に

+ `pnpm run fix`で全ファイル一括整形+自動改善可能なものは自動改善
+ この操作を習慣づけることで個々の書式による差分がなくなり、エラー検知も常時行える
+ 動的な箇所の変更などで挙動やデプロイの懸念がある場合は`pnpm run build`を実行し、エラーが無いか確認する

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

+ [React 公式ドキュメント](https://ja.react.dev/blog/2023/03/16/introducing-react-dev/)：React の基本概念、チュートリアル、API リファレンスなど
+ [TypeScript ハンドブック](https://www.typescriptlang.org/)：TypeScript の言語機能、ベストプラクティス、サンプルコードなど
+ [Vite 公式ドキュメント](https://ja.vitejs.dev/)：Vite の設定、プラグイン、ビルドオプションなど
+ [Biome 公式ドキュメント](https://biomejs.dev/ja)：Biome の設定、ルール、オプション設定など

---

## Github Packages

GitHub Packages は GitHub が提供するパッケージレジストリサービスです。npm、Maven、NuGet、RubyGems などと互換性があり、チームのプライベートコードやオープンソースプロジェクトのパッケージを公開・管理できます。

### 主な特徴

+ GitHub リポジトリと統合されたパッケージ管理
+ CI/CD ワークフローとの連携が容易
+ パッケージのバージョン管理とアクセス制御
+ npm や Docker などの多様なパッケージ形式をサポート

### 使用例

```sh
# .npmrcの設定例
@your-org:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

# パッケージをインストールする
npm install @your-org/package-name
```

詳細は [GitHub Packages のドキュメント](https://docs.github.com/ja/packages) を参照してください。

## 開発者向け設定

### パッケージ公開の仕組み

このプロジェクトではGitHub Packagesを使用して、Reactコンポーネントライブラリを公開しています。パッケージの公開には以下の2つの方法があります：

#### 1. 手動で公開する場合

Personal Access Token (classic)をGitHubで生成し、以下のいずれかの方法で設定します：

1. GitHubでPersonal Access Token (classic)を生成
   + 必要な権限: `repo`, `write:packages`
   + [トークン作成手順](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

2. 認証設定（いずれかを選択）：

   ```bash
   # A. 環境変数として設定
   export GITHUB_TOKEN=your_github_token

   # B. .npmrc.localファイルを作成（.gitignoreに記載済み）
   echo "//npm.pkg.github.com/:_authToken=your_github_token" > .npmrc.local

   # C. 一時的に.npmrcファイルを結合して公開する
   cat .npmrc.local .npmrc > .npmrc.combined && mv .npmrc.combined .npmrc
   pnpm publish
   git checkout -- .npmrc  # 元の状態に戻す
   ```

#### 2. GitHub Actions による自動公開（推奨）

リポジトリに`.github/workflows/publish.yml`ファイルを作成することで、新しいリリースを作成すると自動的にパッケージが公開されます：

```yaml
name: Publish Package

on:
  release:
    types: [created]

jobs:
  build-and-publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
          registry-url: 'https://npm.pkg.github.com'
          scope: '@boxpistols'

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build library
        run: pnpm build:lib

      - name: Publish package
        run: pnpm publish --no-git-checks
        env:
          NODE_AUTH_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

**ワークフローの利点:**

+ 開発者は個別にトークン設定が不要になる
+ リポジトリのSecrets管理が不要（自動で`GITHUB_TOKEN`が提供される）
+ バージョン管理とリリース作成のプロセスが標準化される

### パッケージの使用方法

プロジェクトでこのパッケージを使用するには：

1. プロジェクトの`.npmrc`ファイルに以下を追加：

   ```bash
   @boxpistols:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

2. パッケージをインストール：

   ```bash
   pnpm add @boxpistols/react-map-vite
   ```

詳細は[GitHub Packagesのドキュメント](https://docs.github.com/ja/packages)を参照してください。

## バージョン管理とリリースフロー

このプロジェクトでは、セマンティックバージョニングを採用し、リリースプロセスを標準化しています。

### バージョン管理の基本

バージョン番号は、`メジャー.マイナー.パッチ`（例：`1.2.3`）の形式で管理されています：

+ **パッチバージョン**: バグ修正や小さな変更（互換性あり）
+ **マイナーバージョン**: 機能追加（互換性あり）
+ **メジャーバージョン**: 互換性のない変更

### バージョン更新方法

#### 1. 手動でバージョンを更新する

```bash
# パッチバージョンを上げる（例：0.0.6 → 0.0.7）
npm version patch

# マイナーバージョンを上げる（例：0.0.7 → 0.1.0）
npm version minor

# メジャーバージョンを上げる（例：0.1.0 → 1.0.0）
npm version major

# バージョン更新と同時にタグもプッシュする
git push --follow-tags
```

**注意**: `npm version`コマンドを実行する前に、すべての変更をコミットする必要があります。未コミットの変更がある場合は、次のようにしてください：

```bash
# 変更をコミット
git add .
git commit -m "準備: バージョン更新前のコミット"

# その後バージョン更新を実行
npm version patch
```

#### 2. 開発ブランチでの作業

機能開発ブランチでは、正式リリースと区別するためにプレリリースバージョンを使用することをおすすめします：

```bash
# プレリリースバージョンの作成（例: 0.0.7-ft-66.0）
npm version prerelease --preid ft-66
```

これにより、開発中の機能を明示的に示すバージョン番号が設定されます。

#### 3. GitHubでのリリース作成

mainブランチにマージ後、GitHubでリリースを作成することで、自動パブリッシュが実行されます：

1. GitHubリポジトリの「Releases」タブを開く
2. 「Draft a new release」をクリック
3. バージョンタグを入力（例：`v0.0.7`）
4. リリースタイトルとリリースノートを記入
5. 「Publish release」をクリック

リリースを公開すると、GitHub Actionsが自動的にパッケージをビルドし、GitHub Packagesに公開します。

### バージョン競合時の対応

すでに公開済みのバージョンで再公開しようとすると、以下のエラーが発生します：

```bash
npm ERR! code E409
npm ERR! 409 Conflict - PUT https://npm.pkg.github.com/@boxpistols%2freact-map-vite - Cannot publish over existing version
```

この場合は、必ずバージョンを上げてから再度公開してください。

### CI/CDでの自動バージョン更新

現在のCIパイプラインでは、リリース作成後に自動的にパッチバージョンが更新されます。これにより、次回のリリースのためにバージョン番号が準備されます。
