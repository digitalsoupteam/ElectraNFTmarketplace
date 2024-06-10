export interface IRoadmapItem {
  top?: {
    q: string;
    text: string;
    noBorder?: boolean;
  };
  bottom: {
    year?: string;
    q: string;
    text: string;
    noBorder?: boolean;
  };
}
