# 使い方ガイド

## Power Appsでの使用方法

### Power Appsポータルから実行

1. [Power Apps ポータル](https://make.powerapps.com)にアクセス
2. 左メニューの「アプリ」を選択
3. 「プロジェクト管理 - ガントチャート」を検索
4. アプリをクリックして起動

### 初回起動時

- Microsoft 365アカウントで自動認証されます
- ヘッダーにログインユーザー名が表示されます
- すべての機能がすぐに利用可能です

## ローカル開発環境での使用

### Power Platform認証付きローカル実行

Power Apps環境と接続してローカルで実行する場合：

```bash
# Power Platform CLIで環境に接続
pac code init --environment [環境ID] --displayName "プロジェクト管理 - ガントチャート"

# 開発サーバーを起動
npm run dev
```

この方法では：
- ✅ Power Platform認証が有効
- ✅ ユーザー情報が取得可能
- ✅ 本番環境と同じ動作

### スタンドアロンローカル実行

Power Apps環境なしでローカル開発する場合：

```bash
npm run dev
```

この方法では：
- ⚠️ Power Apps SDKはモックモード
- ⚠️ ユーザー情報は取得されません
- ✅ UI開発とテストは可能

## アプリケーションの起動

### ローカル環境での実行

1. **PowerShellの実行ポリシーを設定** (初回のみ)
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

2. **依存関係のインストール**
```bash
cd c:\Test\timer-app
npm install
```

3. **開発サーバーの起動**
```bash
npm run dev
```

4. **ブラウザでアクセス**
```
http://localhost:3000
```

## 画面の説明

### 1. ガントチャート

**左パネル**: タスク名とカテゴリ
- タスク名をクリックすると選択状態になります
- 選択されたタスクは青色でハイライトされます

**右パネル**: タイムライン
- 各タスクの期間を横棒グラフで表示
- バーの色でステータスを表示:
  - 🟢 緑: 完了
  - 🔵 青: 進行中
  - ⚫ グレー: 未着手
  - 🔴 赤: 遅延
- バー内の明るい部分が進捗率を表示

### 2. タスク一覧

各タスクの詳細情報を表形式で表示:
- **タスク名**: タスクの名称と説明
- **カテゴリ**: プロジェクト管理、インフラ、アプリケーション等
- **担当者**: タスクの担当者
- **期間**: 開始日〜終了日
- **進捗**: 進捗率を%とプログレスバーで表示
- **状態**: 現在のステータス

## サンプルプロジェクトの内容

### Microsoft 365 / Office導入プロジェクト (7フェーズ)

1. **プロジェクト立ち上げ** (2025年11月〜12月)
   - プロジェクトキックオフ
   - 要件定義

2. **インフラ準備** (2025年12月)
   - Microsoft 365テナント設定
   - Azure AD設定

3. **アプリケーション導入** (2025年12月〜2026年1月)
   - Microsoft Teams導入
   - SharePoint Online設定
   - Exchange Online設定
   - OneDrive for Business展開

4. **Office製品導入** (2026年1月〜3月)
   - Microsoft 365 Apps展開計画
   - パイロット展開
   - 全社展開

5. **セキュリティとコンプライアンス** (2026年1月〜2月)
   - セキュリティポリシー設定
   - データ保護とバックアップ設定

6. **トレーニングとサポート** (2026年2月〜3月)
   - ユーザートレーニング資料作成
   - トレーニング実施
   - ヘルプデスク体制構築

7. **本番稼働と監視** (2026年3月〜5月)
   - 本番稼働準備
   - 本番稼働開始
   - 稼働後監視とサポート
   - プロジェクト完了報告

## カスタマイズ方法

### タスクデータの変更

`src/data/sampleData.ts` を編集してタスクを追加・変更できます:

```typescript
export const sampleTasks: Task[] = [
  {
    id: 'task-1',
    name: 'タスク名',
    startDate: new Date('2025-11-17'),
    endDate: new Date('2025-11-20'),
    progress: 50,  // 0-100
    status: 'in-progress',  // 'not-started' | 'in-progress' | 'completed' | 'delayed'
    category: 'カテゴリ名',
    assignee: '担当者名',
    description: 'タスクの説明'
  },
  // 他のタスク...
];
```

### スタイルの変更

各CSSファイルを編集してデザインをカスタマイズできます:
- `src/App.css` - 全体のレイアウト
- `src/components/GanttChart.css` - ガントチャートのスタイル
- `src/components/TaskList.css` - タスク一覧のスタイル

## 開発標準について

このアプリは [geekfujiwara/CodeAppsDevelopmentStandard](https://github.com/geekfujiwara/CodeAppsDevelopmentStandard) の開発標準に基づいて開発されています。

### 開発フロー

- ✅ **Phase 0**: 開発環境準備
- ✅ **Phase 1**: プロジェクトセットアップ
- ✅ **Phase 2**: 機能実装
- ⏳ **Phase 3**: データソース統合 (今後の拡張)

## トラブルシューティング

### PowerShellでnpmコマンドが実行できない

**エラー**: `このシステムではスクリプトの実行が無効になっています`

**解決方法**:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
```

### ポート3000が既に使用されている

**解決方法**: `vite.config.ts`でポート番号を変更
```typescript
export default defineConfig({
  server: {
    port: 3001,  // 別のポートに変更
  },
})
```

## Power Appsへのデプロイ

### 完全なデプロイ手順

#### Step 1: Power Platform認証

```bash
pac auth create
```

ブラウザが開くので、組織のMicrosoft 365アカウントでサインイン。

#### Step 2: 環境の確認

```bash
pac org list
```

デプロイ先の環境IDをコピー。

#### Step 3: Code Appsの初期化

```bash
pac code init --environment [コピーした環境ID] --displayName "プロジェクト管理 - ガントチャート"
```

`power.config.json`に環境情報が保存されます。

#### Step 4: Power Platform環境でローカルテスト

```bash
npm run dev
```

http://localhost:3000 で起動し、Power Platform認証を確認。

#### Step 5: ビルド

```bash
npm run build
```

`dist`フォルダにビルド成果物が生成されます。

#### Step 6: デプロイ

```bash
pac code push
```

デプロイが完了すると、Power Appsポータルでアプリが利用可能になります。

### デプロイの確認

1. https://make.powerapps.com にアクセス
2. 左メニュー「アプリ」→「すべて」
3. 「プロジェクト管理 - ガントチャート」を検索
4. アプリを実行して動作確認

## 今後の拡張

### Phase 3: データソース統合

Dataverseと統合してデータを永続化:
```bash
pac code add-data-source
```

詳細は [Phase 3 リファレンス](https://github.com/geekfujiwara/CodeAppsDevelopmentStandard/blob/main/PHASE3_DATA_INTEGRATION.md) を参照してください。
