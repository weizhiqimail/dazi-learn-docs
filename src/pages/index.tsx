import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
export default function Home() {
  return (
    <Layout title="首页" description="技术知识学习与练习">
      <main className={styles.main}>
        <h1>学习模块</h1>
        <p>选择一个模块阅读文档或进行练习。</p>
        <section className={styles.module}>
          <div>
            <h2>AWS</h2>
            <h3>AWS-CLF-C02云从业者</h3>
            <p>包含C1～C6知识文档、场景分析和719道分类练习题。</p>
          </div>
          <nav>
            <Link className="button button--primary" to="/docs/aws/clf-c02">
              阅读文档
            </Link>
            <Link className="button button--secondary" to="/practice/aws-clf-c02">
              开始做题
            </Link>
          </nav>
        </section>
        <section>
          <h2>使用说明</h2>
          <ul>
            <li>从知识文档开始，可通过左侧目录按章节阅读。</li>
            <li>做题页面支持分类筛选、单选与多选、提交后查看答案。</li>
            <li>错题和收藏保存在当前浏览器中。</li>
          </ul>
        </section>
      </main>
    </Layout>
  );
}
