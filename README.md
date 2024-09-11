# Dev Docs

このドキュメントは柔軟に適時更新していきます

## 基本環境構築

### .env ファイルの配置

```sh
cp -p .env.example .env
```

### Bun

```sh
curl -fsSL https://bun.sh/install | bash
```

#### Bun Docs

- [Bun Official](https://bun.sh/)
- [Bun Installation](https://bun.sh/docs/installation)

### Biome のインストール

```sh
bun add -g @biome/cli
```

### 依存パッケージのインストール

```sh
bun install
```

## Scripts

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "format": "bun biome format --write .",
    "lint": "bun biome lint --write ./src",
    "fix": "bun run lint && bun run format",
    "preview": "vite preview",
    "sb": "storybook dev -p 6006",
    "sb-build": "storybook build",
    "build-all": "bun run build && bun run sb-build",
    "prepare": "husky"
  },
```

### 主なターミナル実行コマンド

#### ローカル開発サーバを起動

```sh
bun dev
```

#### Lintチェック

```sh
bun lint
```

#### ファイルの整形と自動改善

```sh
bun fix
```

#### プロダクション用ビルド

```sh
bun build
```

#### Storybook

```sh
bun sb
```

### Node 管理

Bun は Node.js の代替として機能しますが、Node.js 互換性のために別途 Node.js をインストールする場合は Volta を推奨します（任意）

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

VSCode 拡張検索枠に @recommended を入力すると、この開発環境に必要な拡張機能が表示されます

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

- `bun run fix`で全ファイル一括整形+自動改善可能なものは自動改善
- この操作を習慣づけることで個々の書式による差分がなくなり、エラー検知も常時行える
- 動的な箇所の変更などで挙動やデプロイの懸念がある場合は`bun run build`を実行し、エラーが無いか確認する

↑

##### husky にて自動化

もし`git commit`を実行した時に自動で`bun run fix`が走らなければ Local に husky が入っていません。その時は以下の操作をして husky を入れてください

```sh
bun run prepare
# or
bun add -d husky
bunx husky install
chmod -R +x .husky
```

その後、`git commit`を実行して`bun run fix`が走っているか確認してください

## React + TypeScript + Vite + Biome

- [React 公式ドキュメント](https://ja.react.dev/blog/2023/03/16/introducing-react-dev/)：React の基本概念、チュートリアル、API リファレンスなど
- [TypeScript ハンドブック](https://www.typescriptlang.org/)：TypeScript の言語機能、ベストプラクティス、サンプルコードなど
- [Vite 公式ドキュメント](https://ja.vitejs.dev/)：Vite の設定、プラグイン、ビルドオプションなど
- [Biome 公式ドキュメント](https://biomejs.dev/ja)：Biome の設定、ルール、オプション設定など
