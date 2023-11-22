export interface Post {
  title?: string;
  content?: string;
  reading_time?: number; // in minutes
  tags?: string[];
  author?: string;
  level?: "entry" | "expert";
  _id?: string;
}
