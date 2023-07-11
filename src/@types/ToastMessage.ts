export interface ToastMessage {
  id: string;
  type?: "success" | "danger" | "warning" | "info" | "light";
  title: string;
  description?: string;
}
