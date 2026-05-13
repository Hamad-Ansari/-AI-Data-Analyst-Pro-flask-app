export interface DatasetColumn {
  name: string;
  type: 'numeric' | 'categorical' | 'datetime';
  nulls: number;
  unique: number;
  sampleValues: any[];
}

export interface MockDataset {
  id: string;
  filename: string;
  originalName: string;
  fileSizeKb: number;
  rows: number;
  cols: number;
  type: string;
  uploadedAt: string;
  columns: DatasetColumn[];
  sampleData: Record<string, any>[];
  summaryStats: {
    mean?: Record<string, number>;
    std?: Record<string, number>;
    min?: Record<string, number>;
    max?: Record<string, number>;
  };
  correlationMatrix: Record<string, Record<string, number>>;
  featureImportance: { feature: string; weight: number }[];
}

export const SAMPLE_DATASETS: MockDataset[] = [
  {
    id: "ds_enterprise_sales_2026",
    filename: "SaaS_Global_Metrics_2026.csv",
    originalName: "SaaS_Global_Metrics_2026.csv",
    fileSizeKb: 1420.5,
    rows: 4500,
    cols: 8,
    type: "csv",
    uploadedAt: "2026-02-23 09:12:00",
    columns: [
      { name: "Transaction_ID", type: "categorical", nulls: 0, unique: 4500, sampleValues: ["TX-1001", "TX-1002", "TX-1003"] },
      { name: "Date", type: "datetime", nulls: 0, unique: 365, sampleValues: ["2026-01-01", "2026-01-02", "2026-01-03"] },
      { name: "Subscription_Tier", type: "categorical", nulls: 12, unique: 4, sampleValues: ["Enterprise", "Pro", "Basic", "Enterprise"] },
      { name: "Monthly_Revenue", type: "numeric", nulls: 0, unique: 1240, sampleValues: [499.0, 99.0, 29.0, 1299.0] },
      { name: "Customer_Acquisition_Cost", type: "numeric", nulls: 5, unique: 820, sampleValues: [120.5, 45.0, 12.0, 410.0] },
      { name: "Platform_Engagement_Score", type: "numeric", nulls: 85, unique: 99, sampleValues: [94.2, 72.1, 41.5, 89.9] },
      { name: "Support_Tickets_Raised", type: "numeric", nulls: 0, unique: 15, sampleValues: [2, 0, 5, 1] },
      { name: "Renewed_Contract", type: "categorical", nulls: 0, unique: 2, sampleValues: ["Yes", "No", "Yes", "Yes"] }
    ],
    sampleData: [
      { Transaction_ID: "TX-1001", Date: "2026-01-01", Subscription_Tier: "Enterprise", Monthly_Revenue: 1299.0, Customer_Acquisition_Cost: 350.0, Platform_Engagement_Score: 94.2, Support_Tickets_Raised: 1, Renewed_Contract: "Yes" },
      { Transaction_ID: "TX-1002", Date: "2026-01-02", Subscription_Tier: "Pro", Monthly_Revenue: 299.0, Customer_Acquisition_Cost: 85.0, Platform_Engagement_Score: 78.4, Support_Tickets_Raised: 0, Renewed_Contract: "Yes" },
      { Transaction_ID: "TX-1003", Date: "2026-01-03", Subscription_Tier: "Basic", Monthly_Revenue: 49.0, Customer_Acquisition_Cost: 20.0, Platform_Engagement_Score: 41.2, Support_Tickets_Raised: 4, Renewed_Contract: "No" },
      { Transaction_ID: "TX-1004", Date: "2026-01-04", Subscription_Tier: "Enterprise", Monthly_Revenue: 1599.0, Customer_Acquisition_Cost: 400.0, Platform_Engagement_Score: 91.0, Support_Tickets_Raised: 2, Renewed_Contract: "Yes" },
      { Transaction_ID: "TX-1005", Date: "2026-01-05", Subscription_Tier: "Pro", Monthly_Revenue: 299.0, Customer_Acquisition_Cost: 90.0, Platform_Engagement_Score: null, Support_Tickets_Raised: 0, Renewed_Contract: "Yes" },
      { Transaction_ID: "TX-1006", Date: "2026-01-06", Subscription_Tier: "Basic", Monthly_Revenue: 49.0, Customer_Acquisition_Cost: null, Platform_Engagement_Score: 62.5, Support_Tickets_Raised: 1, Renewed_Contract: "Yes" },
      { Transaction_ID: "TX-1007", Date: "2026-01-07", Subscription_Tier: "Enterprise", Monthly_Revenue: 1299.0, Customer_Acquisition_Cost: 340.0, Platform_Engagement_Score: 88.7, Support_Tickets_Raised: 3, Renewed_Contract: "Yes" },
      { Transaction_ID: "TX-1008", Date: "2026-01-08", Subscription_Tier: "Basic", Monthly_Revenue: 49.0, Customer_Acquisition_Cost: 22.0, Platform_Engagement_Score: 33.1, Support_Tickets_Raised: 6, Renewed_Contract: "No" },
    ],
    summaryStats: {
      mean: { Monthly_Revenue: 617.75, Customer_Acquisition_Cost: 186.71, Platform_Engagement_Score: 71.3, Support_Tickets_Raised: 2.12 },
      std: { Monthly_Revenue: 644.20, Customer_Acquisition_Cost: 165.11, Platform_Engagement_Score: 23.8, Support_Tickets_Raised: 2.10 },
      min: { Monthly_Revenue: 49.0, Customer_Acquisition_Cost: 20.0, Platform_Engagement_Score: 33.1, Support_Tickets_Raised: 0 },
      max: { Monthly_Revenue: 1599.0, Customer_Acquisition_Cost: 400.0, Platform_Engagement_Score: 94.2, Support_Tickets_Raised: 6 }
    },
    correlationMatrix: {
      Monthly_Revenue: { Monthly_Revenue: 1.0, Customer_Acquisition_Cost: 0.94, Platform_Engagement_Score: 0.81, Support_Tickets_Raised: -0.42 },
      Customer_Acquisition_Cost: { Monthly_Revenue: 0.94, Customer_Acquisition_Cost: 1.0, Platform_Engagement_Score: 0.76, Support_Tickets_Raised: -0.38 },
      Platform_Engagement_Score: { Monthly_Revenue: 0.81, Customer_Acquisition_Cost: 0.76, Platform_Engagement_Score: 1.0, Support_Tickets_Raised: -0.65 },
      Support_Tickets_Raised: { Monthly_Revenue: -0.42, Customer_Acquisition_Cost: -0.38, Platform_Engagement_Score: -0.65, Support_Tickets_Raised: 1.0 }
    },
    featureImportance: [
      { feature: "Platform_Engagement_Score", weight: 0.44 },
      { feature: "Support_Tickets_Raised", weight: 0.29 },
      { feature: "Monthly_Revenue", weight: 0.18 },
      { feature: "Customer_Acquisition_Cost", weight: 0.09 }
    ]
  },
  {
    id: "ds_retail_fraud_detection",
    filename: "Fintech_Anomaly_Fraud_Log.json",
    originalName: "Fintech_Anomaly_Fraud_Log.json",
    fileSizeKb: 8900.2,
    rows: 125000,
    cols: 6,
    type: "json",
    uploadedAt: "2026-02-22 18:45:11",
    columns: [
      { name: "Account_Hash", type: "categorical", nulls: 0, unique: 98120, sampleValues: ["ACC-091", "ACC-812"] },
      { name: "Transfer_Amount", type: "numeric", nulls: 0, unique: 45000, sampleValues: [12.50, 4500.0, 99000.0] },
      { name: "Device_Integrity_Rating", type: "numeric", nulls: 410, unique: 100, sampleValues: [0.99, 0.42, 0.12] },
      { name: "Location_IP_Risk", type: "numeric", nulls: 0, unique: 10, sampleValues: [1, 2, 8, 9] },
      { name: "Time_Elapsed_Sec", type: "numeric", nulls: 0, unique: 880, sampleValues: [4, 12, 600] },
      { name: "Flagged_Fraud", type: "categorical", nulls: 0, unique: 2, sampleValues: ["0", "1"] }
    ],
    sampleData: [
      { Account_Hash: "ACC-091", Transfer_Amount: 12.50, Device_Integrity_Rating: 0.99, Location_IP_Risk: 1, Time_Elapsed_Sec: 120, Flagged_Fraud: "0" },
      { Account_Hash: "ACC-812", Transfer_Amount: 4500.0, Device_Integrity_Rating: 0.42, Location_IP_Risk: 8, Time_Elapsed_Sec: 4, Flagged_Fraud: "1" },
      { Account_Hash: "ACC-771", Transfer_Amount: 150.0, Device_Integrity_Rating: 0.95, Location_IP_Risk: 2, Time_Elapsed_Sec: 45, Flagged_Fraud: "0" },
      { Account_Hash: "ACC-110", Transfer_Amount: 89900.0, Device_Integrity_Rating: 0.11, Location_IP_Risk: 9, Time_Elapsed_Sec: 1, Flagged_Fraud: "1" },
      { Account_Hash: "ACC-304", Transfer_Amount: 45.0, Device_Integrity_Rating: 0.98, Location_IP_Risk: 1, Time_Elapsed_Sec: 300, Flagged_Fraud: "0" }
    ],
    summaryStats: {
      mean: { Transfer_Amount: 450.22, Device_Integrity_Rating: 0.88, Location_IP_Risk: 2.1, Time_Elapsed_Sec: 140.5 },
      std: { Transfer_Amount: 2100.45, Device_Integrity_Rating: 0.21, Location_IP_Risk: 2.8, Time_Elapsed_Sec: 180.1 },
      min: { Transfer_Amount: 0.50, Device_Integrity_Rating: 0.05, Location_IP_Risk: 1, Time_Elapsed_Sec: 1 },
      max: { Transfer_Amount: 99000.0, Device_Integrity_Rating: 1.0, Location_IP_Risk: 10, Time_Elapsed_Sec: 1200 }
    },
    correlationMatrix: {
      Transfer_Amount: { Transfer_Amount: 1.0, Device_Integrity_Rating: -0.32, Location_IP_Risk: 0.55, Time_Elapsed_Sec: -0.22 },
      Device_Integrity_Rating: { Transfer_Amount: -0.32, Device_Integrity_Rating: 1.0, Location_IP_Risk: -0.68, Time_Elapsed_Sec: 0.41 },
      Location_IP_Risk: { Transfer_Amount: 0.55, Device_Integrity_Rating: -0.68, Location_IP_Risk: 1.0, Time_Elapsed_Sec: -0.51 },
      Time_Elapsed_Sec: { Transfer_Amount: -0.22, Device_Integrity_Rating: 0.41, Location_IP_Risk: -0.51, Time_Elapsed_Sec: 1.0 }
    },
    featureImportance: [
      { feature: "Location_IP_Risk", weight: 0.52 },
      { feature: "Device_Integrity_Rating", weight: 0.31 },
      { feature: "Transfer_Amount", weight: 0.12 },
      { feature: "Time_Elapsed_Sec", weight: 0.05 }
    ]
  }
];
