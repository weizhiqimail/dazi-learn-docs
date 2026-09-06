import React,{useEffect,useMemo,useState}from'react';
import useBaseUrl from'@docusaurus/useBaseUrl';
import type{QuizBank,QuizQuestion}from'../../types/quiz';
import styles from'./styles.module.css';

type Props={src:string;title:string};
type Saved={wrong:string[];favorites:string[]};
const empty:Saved={wrong:[],favorites:[]};
export default function QuizEngine({src,title}:Props){
 const url=useBaseUrl(src),[bank,setBank]=useState<QuizBank>(),[index,setIndex]=useState(0),[selected,setSelected]=useState<string[]>([]),[revealed,setRevealed]=useState(false),[random,setRandom]=useState(false),[category,setCategory]=useState('all'),[saved,setSaved]=useState<Saved>(empty);
 useEffect(()=>{fetch(url).then(r=>r.json()).then(setBank)},[url]);
 useEffect(()=>{try{setSaved(JSON.parse(localStorage.getItem('dazi-quiz-aws-clf-c02')||'null')||empty)}catch{}},[]);
 const persist=(next:Saved)=>{setSaved(next);localStorage.setItem('dazi-quiz-aws-clf-c02',JSON.stringify(next))};
 const categories=useMemo(()=>bank?[...new Set(bank.questions.map(q=>q.category))]:[],[bank]);
 const list=useMemo(()=>{if(!bank)return[];const x=category==='all'?bank.questions:bank.questions.filter(q=>q.category===category);return random?[...x].sort((a,b)=>Number(a.id)*9301%49297-Number(b.id)*9301%49297):x},[bank,category,random]);
 const q:QuizQuestion|undefined=list[index];
 useEffect(()=>{setIndex(0);setSelected([]);setRevealed(false)},[category,random]);
 if(!bank||!q)return <div className={styles.loading}>正在加载题库…</div>;
 const choose=(id:string)=>{if(revealed)return;setSelected(q.type==='single'?[id]:selected.includes(id)?selected.filter(x=>x!==id):[...selected,id])};
 const correct=[...q.answers].sort().join('')===[...selected].sort().join('');
 const submit=()=>{if(!selected.length)return;setRevealed(true);if(!correct&&!saved.wrong.includes(q.id))persist({...saved,wrong:[...saved.wrong,q.id]})};
 const next=(step:number)=>{setIndex((index+step+list.length)%list.length);setSelected([]);setRevealed(false);scrollTo({top:0,behavior:'smooth'})};
 const favorite=()=>persist({...saved,favorites:saved.favorites.includes(q.id)?saved.favorites.filter(x=>x!==q.id):[...saved.favorites,q.id]});
 return <div className={styles.quiz}>
  <div className={styles.toolbar}><div><strong>{title}</strong><span>{index+1}/{list.length}</span></div><div><select aria-label="题目分类" value={category} onChange={e=>setCategory(e.target.value)}><option value="all">全部分类</option>{categories.map(x=><option key={x}>{x}</option>)}</select><label><input type="checkbox" checked={random} onChange={e=>setRandom(e.target.checked)}/>随机顺序</label></div></div>
  <article className={styles.card}><div className={styles.meta}><span>Q{q.id}</span><span>{q.type==='multiple'?'多选题':'单选题'}</span><button onClick={favorite}>{saved.favorites.includes(q.id)?'★ 已收藏':'☆ 收藏'}</button></div>
   <h2>{q.prompt.zh||'中文翻译生成中'}</h2><p className={styles.english}>{q.prompt.en}</p>
   <div className={styles.options}>{q.options.map(o=>{const active=selected.includes(o.id),right=revealed&&q.answers.includes(o.id),wrong=revealed&&active&&!right;return <button key={o.id} className={[styles.option,active?styles.active:'',right?styles.right:'',wrong?styles.wrong:''].join(' ')} onClick={()=>choose(o.id)}><b>{o.id}</b><span><span>{o.text.zh||'中文翻译生成中'}</span><small>{o.text.en}</small></span></button>})}</div>
   <div className={styles.actions}><button onClick={()=>next(-1)}>上一题</button><button className={styles.submit} disabled={!selected.length||revealed} onClick={submit}>提交答案</button><button onClick={()=>next(1)}>下一题</button></div>
   {revealed&&<details open className={correct?styles.correct:styles.incorrect}><summary>{correct?'回答正确':'回答错误'} · 正确答案：{q.answers.join('、')}</summary><div><p>{q.explanation.zh||'请结合对应知识章节与选项定位复核本题。'}</p><a href={useBaseUrl('/docs/aws/clf-c02/C4-719题分类解析/C4-00-719题索引与分类规则')}>查看分类解析</a></div></details>}
  </article><p className={styles.saved}>错题 {saved.wrong.length} · 收藏 {saved.favorites.length}（保存在当前浏览器）</p>
 </div>;
}
