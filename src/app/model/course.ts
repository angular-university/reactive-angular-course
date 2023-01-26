export interface Course {
  id: string;
  description: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  courseListIcon: string;
  category: string;
  lessonsCount: number;
}


// funskjoni na mundeson renditjen e objekteve nga me i vogli te me i madhi 
// ku mer 2 objekte e para brenda nje array, dhe i rendit sipas numra vete " seqNo " 
// po te kontrollosh te dhenat http://localhost:9000/api/courses, objektet brenda array jan te cregullt si pas renditjes se numrave " seqNo "
// me ndimen e ket funksjoni thjesh rendisim objekte brenda array
export function sortCoursesBySeqNo(c1: Course, c2: Course) {
  return c1.seqNo - c2.seqNo;
}


