# プロジェクト管理アプリ - ガントチャート

Microsoft 365 / Office製品導入プロジェクトのタスク管理をガントチャートで視覚化するPower Apps Code Appsアプリケーション

## 概要

このアプリケーションは、ITシステム導入プロジェクトのタスクを管理するためのガントチャート機能を提供します。Microsoft 365およびOffice製品の導入プロジェクトのサンプルデータが含まれています。

## 主な機能

- ✅ **ガントチャート表示** - プロジェクト全体のタイムラインを視覚化
- ✅ **タスク一覧** - 詳細なタスク情報をテーブル形式で表示
- ✅ **進捗管理** - 各タスクの進捗状況を%で表示
- ✅ **ステータス管理** - 未着手/進行中/完了/遅延のステータス管理
- ✅ **カテゴリ分類** - プロジェクト管理、インフラ、アプリケーション、セキュリティなどのカテゴリ
- ✅ **レスポンシブデザイン** - モバイルデバイスにも対応

## サンプルデータ

以下のフェーズに分かれた20タスクのサンプルデータが含まれています：

1. **プロジェクト管理** - キックオフ、要件定義
2. **インフラ** - Microsoft 365テナント設定、Azure AD設定
3. **アプリケーション** - Teams、SharePoint、Exchange Online、OneDrive導入
4. **Office製品** - Microsoft 365 Apps展開計画と実施
5. **セキュリティ** - セキュリティポリシー、データ保護
6. **トレーニング** - ユーザートレーニングとサポート体制
7. **本番稼働** - 本番稼働開始と監視

## 技術スタック

- **フレームワーク**: React 19 + TypeScript
- **ビルドツール**: Vite (Rolldown)
- **Power Platform**: @microsoft/power-apps SDK
- **スタイリング**: CSS (Microsoft Fluent Design風)

## プロジェクト構造

```
timer-app/
├── src/
│   ├── components/          # UIコンポーネント
│   │   ├── GanttChart.tsx   # ガントチャートコンポーネント
│   │   ├── GanttChart.css
│   │   ├── TaskList.tsx     # タスク一覧コンポーネント
│   │   └── TaskList.css
│   ├── data/
│   │   └── sampleData.ts    # サンプルタスクデータ
│   ├── types/
│   │   └── Task.ts          # タスク型定義
│   ├── App.tsx              # メインアプリケーション
│   ├── App.css
│   ├── index.css
│   └── main.tsx             # エントリーポイント
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Power Appsへのデプロイ

### 前提条件

Power Platform CLIがインストールされていることを確認してください：
```bash
pac --version
```

### デプロイ手順

#### 1. Power Platform環境への認証

```bash
pac auth create
```

ブラウザが開き、Microsoft 365アカウントでサインインします。

#### 2. 環境IDの確認

```bash
pac org list
```

使用する環境のEnvironment IDをコピーします。

#### 3. Power Apps Code Appsの初期化（初回のみ）

```bash
pac code init --environment [環境ID] --displayName "プロジェクト管理 - ガントチャート"
```

例：
```bash
pac code init --environment 12345678-1234-1234-1234-123456789abc --displayName "プロジェクト管理 - ガントチャート"
```

#### 4. ローカルでPower Apps環境と接続してテスト

```bash
npm run dev
```

Power Platform認証が行われ、http://localhost:3000 でアプリが起動します。

#### 5. ビルド

```bash
npm run build
```

#### 6. Power Appsへデプロイ

```bash
pac code push
```

デプロイが完了すると、Power Appsポータルでアプリが利用可能になります。

### デプロイ後の確認

1. [Power Apps ポータル](https://make.powerapps.com)にアクセス
2. 左メニューの「アプリ」を選択
3. 「プロジェクト管理 - ガントチャート」を探して実行

## Power Apps機能

### SDK統合済み機能

- ✅ **Power Platform認証**: 自動的にMicrosoft 365アカウントで認証
- ✅ **ユーザー情報取得**: ログインユーザーの表示名とメールアドレスを表示
- ✅ **SDK初期化**: Power Apps環境での動作に最適化

### ローカル開発とPower Apps環境の違い

**ローカル開発** (`npm run dev`):
- Power Apps SDKはモックモードで動作
- ユーザー情報は取得できない場合があります
- データはブラウザのメモリに保存

**Power Apps環境**:
- 完全な認証とSDK機能が利用可能
- ユーザー情報が自動取得されます
- 将来的にDataverseと統合可能

## 開発環境のセットアップ

### 前提条件

- Node.js (推奨: v18以上)
- npm または yarn
- Power Platform CLI (Power Appsへのデプロイ時)

### インストールと実行

1. 依存関係のインストール
```bash
npm install
```

2. 開発サーバーの起動
```bash
npm run dev
```

3. ブラウザで開く
```
http://localhost:3000
```

### Power Appsへのデプロイ

```bash
# ビルド
npm run build

# Power Appsへプッシュ（要: Power Platform CLI）
pac code push
```

詳細な手順は上記の「Power Appsへのデプロイ」セクションを参照してください。

## 開発標準準拠

このプロジェクトは [CodeAppsDevelopmentStandard](https://github.com/geekfujiwara/CodeAppsDevelopmentStandard) の開発標準に準拠しています。

- ✅ Phase 0: 環境準備完了
- ✅ Phase 1: プロジェクトセットアップとローカル実行
- ✅ Phase 2: 機能実装（ガントチャート、タスク一覧）
- ⏳ Phase 3: データソース統合（将来の拡張）

## 今後の拡張予定

- [ ] Dataverse統合によるデータ永続化
- [ ] タスクのCRUD操作（作成、編集、削除）
- [ ] タスク依存関係の視覚化
- [ ] ドラッグ&ドロップによる日程変更
- [ ] フィルタリング機能（カテゴリ、担当者、ステータス）
- [ ] エクスポート機能（PDF、Excel）

## ライセンス

MIT License

## 作成者

Power Apps Code Apps開発標準に基づいて開発
