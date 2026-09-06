export type LocalizedText={en:string;zh:string};
export type QuizQuestion={id:string;type:'single'|'multiple';module:string;exam:string;category:string;prompt:LocalizedText;options:{id:string;text:LocalizedText}[];answers:string[];explanation:LocalizedText;votes?:{answer:string;percentage:number}[]};
export type QuizBank={schemaVersion:number;module:{id:string;name:string};exam:{id:string;name:string};questions:QuizQuestion[]};
