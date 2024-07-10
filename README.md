# Dev Docs

このドキュメントは柔軟に適時に更新される想定です

## 基本環境構築

### .env ファイルの配置

```sh
cp -p .env.example .env
```

### 依存パッケージのインストール

```sh
yarn install
```

### ローカル開発サーバを起動

```sh
yarn dev
```

### プロダクション用ビルド

```sh
yarn build
```

### Node 管理

Volta 推奨(任意)

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
    
VSCode拡張検索枠に @recommended を入力すると、この開発環境に必要な拡張機能が表示されます

![Code 2024-07-10 20 59 57](https://github.com/BoxPistols/react-drone-vite/assets/10333049/518a259e-09eb-43cc-8e3b-9b841226fcaa)

#### VSCode 設定

基本的に上記拡張ツール２点入れれば使えるはずですが、`Cmd + S`で自動整形されない、動かない場合は以下を確認

- `Cmd + Shift + P` 「フォーマット」
- フォーマットを Biome に選択、既定ツールにする
- `Cmd + ,（カンマ）`
- ワークスペース
- Formt on Save をオン

### 運用

#### コミット・プッシュ前に

- `yarn fix`で全ファイル一括整形+自動改善可能なものは自動改善
- この操作を習慣づけることで個々の書式による差分がなくなり、エラー検知も常時行える
- 動的な箇所の変更などで挙動やデプロイの懸念がある場合は`yarn build`を実行し、エラーが無いか確認する

↑

##### husky にて自動化

もし`git commit`を実行した時に自動で`yarn fix`が走らなければ Local に husky が入っていません。その時は以下の操作をして husky を入れてください

```sh
yarn prepare
# or
yarn add husky --dev
npx husky install
chmod -R +x .husky
```

その後、`git commit`を実行して`yarn fix`が走っているか確認してください

## React + TypeScript + Vite + Biome

- [React公式ドキュメント](https://ja.react.dev/blog/2023/03/16/introducing-react-dev/)：Reactの基本概念、チュートリアル、APIリファレンスなど
- [TypeScriptハンドブック](https://www.typescriptlang.org/)：TypeScriptの言語機能、ベストプラクティス、サンプルコードなど
- [Vite公式ドキュメント](https://ja.vitejs.dev/)：Viteの設定、プラグイン、ビルドオプションなど
- [Biome公式ドキュメント](https://biomejs.dev/ja)：Biomeの設定、ルール、オプション設定など
