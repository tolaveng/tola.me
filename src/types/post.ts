type Post = {
  _id: string;
  _userId: string;
  postType: PostType;
  title: string;
  path: string;
  content: string;
  summary: string;
  tags: string[];
  publishedDateTime: Date;
  modifiedDateTime: Date;
  isPublished: boolean;
  isArhived: boolean;
  featureImageUrl: string;
  viewCount: number;
}