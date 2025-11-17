# Power Apps 統合ガイド

GitHub Pagesにデプロイしたガントチャートアプリを、Power AppsのCanvas Appで表示する手順です。

## 🌐 アプリのURL

デプロイ完了後、以下のURLでアプリにアクセスできます:

```
https://sakamoto-k-git.github.io/gantt-chart-app/
```

## 📱 Power Appsでの表示手順

### Step 1: Power Appsポータルにアクセス

1. https://make.powerapps.com を開く
2. Microsoft 365アカウントでサインイン
3. 適切な環境を選択

### Step 2: 新しいCanvas Appを作成

1. ホーム画面で「+ Create」をクリック
2. 「Canvas app from blank」を選択
3. アプリ設定:
   - **App name**: `ガントチャート管理`
   - **Format**: **Tablet** を選択（大画面表示に最適）
4. 「Create」をクリック

### Step 3: iframeコンポーネントの追加

#### 3-1. HTMLテキストコントロールを追加

1. 左メニューから「Insert」(+アイコン) をクリック
2. 「Text」セクションから「HTML text」を選択
3. 画面にHTML textコントロールが追加されます

#### 3-2. HTML textの設定

HTML textコントロールを選択し、右側のプロパティで以下を設定:

**HtmlText プロパティ**:
```html
"<iframe src='https://sakamoto-k-git.github.io/gantt-chart-app/' width='100%' height='100%' frameborder='0' style='border:none;'></iframe>"
```

**位置とサイズ**:
- **X**: `0`
- **Y**: `0`
- **Width**: `Parent.Width`
- **Height**: `Parent.Height`

これでアプリ全体にガントチャートが表示されます。

### Step 4: アプリの保存と公開

1. 右上の💾「Save」アイコンをクリック
2. 「Publish」をクリックしてアプリを公開
3. 公開ダイアログで「Publish this version」を確認

### Step 5: アプリの共有

1. 右上の「Share」ボタンをクリック
2. 共有したいユーザーまたはグループを検索
3. 権限レベルを選択:
   - **Can view**: 閲覧のみ
   - **Can edit**: 編集可能
4. 「Share」をクリック

## 🎨 カスタマイズオプション

### ヘッダーの追加

アプリにタイトルバーやナビゲーションを追加する場合:

1. HTML textのY座標を調整: `Y = 60`
2. HTML textの高さを調整: `Height = Parent.Height - 60`
3. 「Insert」→「Label」でヘッダーラベルを追加
4. ラベルのプロパティ:
   - **Text**: `"プロジェクト管理 - ガントチャート"`
   - **Fill**: `RGBA(0, 120, 212, 1)` (Blueカラー)
   - **Color**: `RGBA(255, 255, 255, 1)` (White文字)
   - **Height**: `60`
   - **Width**: `Parent.Width`
   - **Align**: `Align.Center`

### リフレッシュボタンの追加

iframe内のアプリを再読み込みするボタン:

1. 「Insert」→「Button」を追加
2. ボタンプロパティ:
   - **Text**: `"🔄 更新"`
   - **OnSelect**: `Set(refreshTime, Now())` (状態変数を更新)
3. HTML textのHtmlTextプロパティを修正:
```html
"<iframe src='https://sakamoto-k-git.github.io/gantt-chart-app/?t=" & Text(refreshTime) & "' width='100%' height='100%' frameborder='0'></iframe>"
```

## 🔐 セキュリティ設定

### iframe埋め込みの許可

Power Appsがiframeを表示できるよう、Content Security Policyを確認:

1. Power Platformアドミンセンター (https://admin.powerplatform.microsoft.com) にアクセス
2. 対象の環境を選択
3. 「Settings」→「Product」→「Features」
4. 「Allow use of external domains」が有効になっていることを確認

## 📊 動作確認

1. Power Apps Studioで「Preview the app」(▶️アイコン)をクリック
2. ガントチャートが正しく表示されることを確認
3. タスクリストとガントチャートが連動して動作することを確認

## 🔄 アプリの更新

GitHub Pagesのアプリを更新した場合:

1. コードを修正
2. `npm run build` でビルド
3. Gitにコミット&プッシュ
4. GitHub Actionsが自動的にデプロイ
5. Power Appsは自動的に最新版を表示（キャッシュクリアが必要な場合あり）

## ❓ トラブルシューティング

### iframeが表示されない

**原因**: Power Appsのセキュリティ設定で外部ドメインがブロックされている

**解決策**:
1. アプリ設定で「Settings」→「Display」
2. 「Enable iframe embedding」を確認
3. 管理者に連絡してドメイン許可を依頼

### iframeのスクロールがおかしい

**解決策**: HTML textのプロパティで以下を設定
```html
"<iframe src='https://sakamoto-k-git.github.io/gantt-chart-app/' width='100%' height='100%' frameborder='0' scrolling='auto'></iframe>"
```

### アプリが古いバージョンを表示する

**解決策**: ブラウザキャッシュをクリア
- iframeのURLにタイムスタンプパラメータを追加:
```html
"<iframe src='https://sakamoto-k-git.github.io/gantt-chart-app/?v=" & Text(Now()) & "'></iframe>"
```

---

## 🎉 完了！

これでPower AppsからGitHub Pagesにデプロイしたガントチャートアプリを表示できます。

**アプリURL**: https://sakamoto-k-git.github.io/gantt-chart-app/
