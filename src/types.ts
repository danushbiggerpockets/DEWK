export interface FeedbackComment {
  id: string;
  name: string;
  email?: string;
  content: string;
  rating: number;
  createdAt: string;
  avatarColor: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  checked: boolean;
}
