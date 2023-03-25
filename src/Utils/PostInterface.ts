export interface PostItem {
    id: number;
    title: string;
    description: string;
    content: string;
    categoryId: number;
    comments: CommentItem[];
}

export interface CommentItem {
    id: number;
    body: string;
    email: string;
    name: string;
}
