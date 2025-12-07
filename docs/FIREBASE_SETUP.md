# Firebase Setup Guide

このプロジェクトでは、データ永続化のためにFirebaseを使用しています。

## セットアップ手順

### 1. Firebaseプロジェクトの作成

1. [Firebase Console](https://console.firebase.google.com/)にアクセス
2. 「プロジェクトを追加」をクリック
3. プロジェクト名を入力して作成

### 2. Firestoreデータベースの作成

1. Firebase Consoleの左メニューから「Firestore Database」を選択
2. 「データベースの作成」をクリック
3. 本番環境モードまたはテストモードを選択
4. ロケーションを選択（asia-northeast1を推奨）

### 3. Firebase設定情報の取得

1. Firebase Consoleのプロジェクト設定（歯車アイコン）を開く
2. 「全般」タブでWebアプリを追加
3. アプリのニックネームを入力
4. Firebase SDKの設定情報をコピー

### 4. 環境変数の設定

1. プロジェクトルートの`.env.example`を`.env`にコピー
2. Firebaseの設定情報を`.env`に記入

```bash
cp .env.example .env
```

`.env`ファイルを編集：

```env
VITE_FIREBASE_API_KEY=your_actual_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_actual_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_actual_sender_id
VITE_FIREBASE_APP_ID=your_actual_app_id
```

### 5. Firestoreセキュリティルールの設定

開発環境では以下のルールを使用してください：

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // すべての読み取りを許可（開発環境のみ）
    match /{document=**} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

本番環境では適切なセキュリティルールを設定してください。

### 6. データ構造

プロジェクトでは以下のコレクションを使用します：

#### users

```typescript
{
  id: string
  name: string
  email: string
  role: 'Admin' | 'Editor' | 'Viewer'
  status: 'active' | 'inactive'
  createdAt: Date
  updatedAt: Date
}
```

#### locations

```typescript
{
  id: string
  name: string
  visitors: number
  status: 'active' | 'inactive'
  latitude: number
  longitude: number
  region: string
}
```

#### analytics

```typescript
{
  id: string
  date: Date
  totalRevenue: number
  newCustomers: number
  orders: number
  inventory: number
  revenueChange: number
  customersChange: number
  ordersChange: number
  inventoryChange: number
}
```

#### orders

```typescript
{
  id: string
  customerName: string
  product: string
  amount: number
  status: 'pending' | 'processing' | 'shipped' | 'completed'
  createdAt: Date
}
```

#### inventory

```typescript
{
  id: string
  product: string
  stock: number
  total: number
  updatedAt: Date
}
```

#### settings

```typescript
{
  id: string
  userId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  age: number
  address: { ... }
  notifications: { ... }
  display: { ... }
  updatedAt: Date
}
```

### 7. サンプルデータの追加

Firestore Consoleから手動でサンプルデータを追加するか、以下のようなスクリプトを作成して初期データを投入できます。

#### サンプルユーザーデータ

```json
{
  "name": "山田太郎",
  "email": "yamada@example.com",
  "role": "Admin",
  "status": "active",
  "createdAt": "2025-11-20T00:00:00.000Z",
  "updatedAt": "2025-11-20T00:00:00.000Z"
}
```

#### サンプル拠点データ

```json
{
  "name": "東京オフィス",
  "visitors": 1234,
  "status": "active",
  "latitude": 35.6809591,
  "longitude": 139.7673068,
  "region": "関東エリア"
}
```

## 使用方法

### カスタムフックの使用

プロジェクトでは、Firebaseデータへのアクセスを簡素化するカスタムフックを提供しています。

#### useUsers

```typescript
import { useUsers } from '@/hooks/useUsers'

function Component() {
  const { users, loading, error, createUser, updateUser, deleteUser } =
    useUsers()

  // ユーザーを作成
  await createUser({
    name: '新規ユーザー',
    email: 'new@example.com',
    role: 'Viewer',
    status: 'active',
  })

  // ユーザーを更新
  await updateUser(userId, { status: 'inactive' })

  // ユーザーを削除
  await deleteUser(userId)
}
```

#### useLocations

```typescript
import { useLocations } from '@/hooks/useLocations'

function Component() {
  const { locations, loading, error, createLocation, updateLocation } =
    useLocations()
  // ...
}
```

#### useSettings

```typescript
import { useSettings } from '@/hooks/useSettings'

function Component() {
  const userId = 'user123'
  const { settings, loading, error, updateSettings } = useSettings(userId)
  // ...
}
```

### リアルタイム更新

カスタムフックはFirestoreのリアルタイムリスナーを使用しており、データが変更されると自動的にUIが更新されます。

## トラブルシューティング

### エラー: Permission denied

セキュリティルールが正しく設定されているか確認してください。開発環境では上記の許可的なルールを使用できます。

### エラー: Firebase not configured

`.env`ファイルが正しく設定されているか、環境変数がアプリケーションで読み込まれているか確認してください。

### データが表示されない

1. Firestoreにデータが存在するか確認
2. ブラウザのコンソールでエラーメッセージを確認
3. ネットワークタブでFirebaseへのリクエストが成功しているか確認

## 参考リンク

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase SDK for Web](https://firebase.google.com/docs/web/setup)
