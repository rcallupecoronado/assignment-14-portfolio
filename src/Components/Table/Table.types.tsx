export interface TableProps {
  headers: string[];
  rows: React.ReactNode[][];
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  headerBackgroundColor?: string;
  headerTextColor?: string;
  disabled?: boolean;
  disabledBackgroundColor?: string;
}
