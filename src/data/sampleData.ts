import type { Task } from '../types/Task';

export const sampleTasks: Task[] = [
  // フェーズ1: プロジェクト立ち上げ
  {
    id: 'task-1',
    name: 'プロジェクトキックオフ',
    startDate: new Date('2025-11-17'),
    endDate: new Date('2025-11-20'),
    progress: 100,
    status: 'completed',
    category: 'プロジェクト管理',
    assignee: 'プロジェクトマネージャー',
    description: 'プロジェクト目標、スコープ、体制の確認'
  },
  {
    id: 'task-2',
    name: '要件定義',
    startDate: new Date('2025-11-21'),
    endDate: new Date('2025-12-05'),
    progress: 80,
    status: 'in-progress',
    category: 'プロジェクト管理',
    assignee: 'ビジネスアナリスト',
    dependencies: ['task-1'],
    description: 'Microsoft 365導入の詳細要件を定義'
  },
  
  // フェーズ2: インフラ準備
  {
    id: 'task-3',
    name: 'Microsoft 365テナント設定',
    startDate: new Date('2025-12-06'),
    endDate: new Date('2025-12-12'),
    progress: 0,
    status: 'not-started',
    category: 'インフラ',
    assignee: 'ITインフラ担当',
    dependencies: ['task-2'],
    description: 'テナントの初期設定とライセンス割り当て'
  },
  {
    id: 'task-4',
    name: 'Azure AD設定',
    startDate: new Date('2025-12-06'),
    endDate: new Date('2025-12-15'),
    progress: 0,
    status: 'not-started',
    category: 'インフラ',
    assignee: 'ITセキュリティ担当',
    dependencies: ['task-2'],
    description: 'ユーザー認証とシングルサインオンの設定'
  },
  
  // フェーズ3: アプリケーション導入
  {
    id: 'task-5',
    name: 'Microsoft Teams導入',
    startDate: new Date('2025-12-16'),
    endDate: new Date('2026-01-10'),
    progress: 0,
    status: 'not-started',
    category: 'アプリケーション',
    assignee: 'アプリ導入担当',
    dependencies: ['task-3', 'task-4'],
    description: 'Teams環境構築とポリシー設定'
  },
  {
    id: 'task-6',
    name: 'SharePoint Online設定',
    startDate: new Date('2025-12-16'),
    endDate: new Date('2026-01-15'),
    progress: 0,
    status: 'not-started',
    category: 'アプリケーション',
    assignee: 'アプリ導入担当',
    dependencies: ['task-3', 'task-4'],
    description: 'サイトコレクション作成とドキュメント管理設定'
  },
  {
    id: 'task-7',
    name: 'Exchange Online設定',
    startDate: new Date('2025-12-20'),
    endDate: new Date('2026-01-20'),
    progress: 0,
    status: 'not-started',
    category: 'アプリケーション',
    assignee: 'メール担当',
    dependencies: ['task-3', 'task-4'],
    description: 'メールボックス作成とメールフロー設定'
  },
  {
    id: 'task-8',
    name: 'OneDrive for Business展開',
    startDate: new Date('2026-01-11'),
    endDate: new Date('2026-01-25'),
    progress: 0,
    status: 'not-started',
    category: 'アプリケーション',
    assignee: 'アプリ導入担当',
    dependencies: ['task-5'],
    description: 'OneDrive同期設定とストレージ容量管理'
  },
  
  // フェーズ4: Office製品導入
  {
    id: 'task-9',
    name: 'Microsoft 365 Apps展開計画',
    startDate: new Date('2026-01-16'),
    endDate: new Date('2026-01-22'),
    progress: 0,
    status: 'not-started',
    category: 'Office製品',
    assignee: 'デスクトップ担当',
    dependencies: ['task-6'],
    description: 'Word, Excel, PowerPoint等の展開計画策定'
  },
  {
    id: 'task-10',
    name: 'Office製品パイロット展開',
    startDate: new Date('2026-01-23'),
    endDate: new Date('2026-02-05'),
    progress: 0,
    status: 'not-started',
    category: 'Office製品',
    assignee: 'デスクトップ担当',
    dependencies: ['task-9'],
    description: '選定部署へのパイロット展開と検証'
  },
  {
    id: 'task-11',
    name: 'Office製品全社展開',
    startDate: new Date('2026-02-06'),
    endDate: new Date('2026-03-05'),
    progress: 0,
    status: 'not-started',
    category: 'Office製品',
    assignee: 'デスクトップ担当',
    dependencies: ['task-10'],
    description: '全社員へのOffice製品インストールと設定'
  },
  
  // フェーズ5: セキュリティとコンプライアンス
  {
    id: 'task-12',
    name: 'セキュリティポリシー設定',
    startDate: new Date('2026-01-26'),
    endDate: new Date('2026-02-10'),
    progress: 0,
    status: 'not-started',
    category: 'セキュリティ',
    assignee: 'ITセキュリティ担当',
    dependencies: ['task-7', 'task-8'],
    description: 'DLP、条件付きアクセス、MFAの設定'
  },
  {
    id: 'task-13',
    name: 'データ保護とバックアップ設定',
    startDate: new Date('2026-02-11'),
    endDate: new Date('2026-02-25'),
    progress: 0,
    status: 'not-started',
    category: 'セキュリティ',
    assignee: 'ITセキュリティ担当',
    dependencies: ['task-12'],
    description: '情報保護ポリシーとバックアップ戦略の実装'
  },
  
  // フェーズ6: トレーニングとサポート
  {
    id: 'task-14',
    name: 'ユーザートレーニング資料作成',
    startDate: new Date('2026-02-06'),
    endDate: new Date('2026-02-20'),
    progress: 0,
    status: 'not-started',
    category: 'トレーニング',
    assignee: 'トレーニング担当',
    dependencies: ['task-10'],
    description: '各アプリケーションの利用マニュアル作成'
  },
  {
    id: 'task-15',
    name: 'ユーザートレーニング実施',
    startDate: new Date('2026-02-21'),
    endDate: new Date('2026-03-15'),
    progress: 0,
    status: 'not-started',
    category: 'トレーニング',
    assignee: 'トレーニング担当',
    dependencies: ['task-14'],
    description: '部署別トレーニングセッションの実施'
  },
  {
    id: 'task-16',
    name: 'ヘルプデスク体制構築',
    startDate: new Date('2026-02-26'),
    endDate: new Date('2026-03-10'),
    progress: 0,
    status: 'not-started',
    category: 'サポート',
    assignee: 'サポート担当',
    dependencies: ['task-13'],
    description: '問い合わせ窓口の設置とFAQ作成'
  },
  
  // フェーズ7: 本番稼働と監視
  {
    id: 'task-17',
    name: '本番稼働準備',
    startDate: new Date('2026-03-06'),
    endDate: new Date('2026-03-15'),
    progress: 0,
    status: 'not-started',
    category: '本番稼働',
    assignee: 'プロジェクトマネージャー',
    dependencies: ['task-11', 'task-13'],
    description: '本番稼働チェックリストの確認'
  },
  {
    id: 'task-18',
    name: '本番稼働開始',
    startDate: new Date('2026-03-16'),
    endDate: new Date('2026-03-16'),
    progress: 0,
    status: 'not-started',
    category: '本番稼働',
    assignee: 'プロジェクトマネージャー',
    dependencies: ['task-17'],
    description: 'Microsoft 365環境の全社利用開始'
  },
  {
    id: 'task-19',
    name: '稼働後監視とサポート',
    startDate: new Date('2026-03-17'),
    endDate: new Date('2026-04-30'),
    progress: 0,
    status: 'not-started',
    category: 'サポート',
    assignee: 'サポート担当',
    dependencies: ['task-18'],
    description: '利用状況監視と問題対応'
  },
  {
    id: 'task-20',
    name: 'プロジェクト完了報告',
    startDate: new Date('2026-05-01'),
    endDate: new Date('2026-05-10'),
    progress: 0,
    status: 'not-started',
    category: 'プロジェクト管理',
    assignee: 'プロジェクトマネージャー',
    dependencies: ['task-19'],
    description: 'プロジェクト成果と教訓の報告書作成'
  }
];
