import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "./style.css";
import { useState } from "react";
import "@blocknote/core/style.css";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import "@blocknote/react/style.css"
export default function App() {
    const editor = useCreateBlockNote({
        placeholders: {
            heading: "未命名标题",
            default: "未命名文本",

        },
    });
    const insertInlineContent = () => {
        editor.insertInlineContent(
            [
                {
                    type: "text",
                    text: "Hello",
                    styles: {
                        bold: true,
                        textColor: "green",
                    },
                },
                {
                    type: "link",
                    href: "https://www.baidu.com",
                    content: "百度",
                },
                {
                    type: "text",
                    text: "!",
                    styles: {
                        italic: true,
                        textColor: "purple",
                    },
                },
            ],
        );
        editor.focus();
    };

    const insertBlockAtCursor = () => {
        const cursorPosition = editor.getTextCursorPosition();

        if (cursorPosition) {
            const newBlock = {
                content: "这个块插入于 " + new Date().toLocaleTimeString(),
            };

            const { block, offset } = cursorPosition;

            console.log(cursorPosition, block, offset, editor.document);

            const blockIndex = editor.document.findIndex(
                (ele) => ele.id === block.id
            );

            if (blockIndex !== -1) {
                editor.insertBlocks([newBlock], editor.document[blockIndex], "nested");
            } else {
                console.error("无法找到光标所在的块");
            }
        } else {
            console.error("无法获取光标位置");
        }
        editor.focus();
    };

    const initialHTML = `<h2 class="bn-inline-content">Artificial Intelligence AI Paper</h2><p class="bn-inline-content">Applications and Challenges of Artificial Intelligence </p><p class="bn-inline-content">Introduction Artificial Intelligence (AI), as a revolutionary technology, is profoundly changing the way various industries operate. From healthcare to finance, from education to transportation, the application of AI is enhancing efficiency, reducing costs, and creating new business models. However, with the rapid development of AI technology, the accompanying challenges and ethical issues are becoming increasingly prominent. This paper will explore the main application areas of artificial intelligence and the challenges it faces. </p><p class="bn-inline-content">Literature Review </p><p class="bn-inline-content">In recent years, research on artificial intelligence has been increasing. Many scholars focus on AI applications in specific fields, such as medical image analysis (Esteva et al., 2019) and autonomous driving technology (Bojarski et al., 2016). At the same time, research on AI ethics and social impacts is also gradually increasing (O'Neil, 2016). However, despite the abundance of research, a systematic analysis of the applications and challenges of AI remains insufficient. </p><p class="bn-inline-content">Application Areas of Artificial Intelligence </p><p class="bn-inline-content">1. <strong>Healthcare</strong> </p><ol><li><p class="bn-inline-content">The application of AI in healthcare mainly involves disease diagnosis, personalized treatment, and drug development. By analyzing large amounts of medical data, AI can help doctors diagnose diseases more accurately and develop personalized treatment plans (Topol, 2019). </p></li></ol><p class="bn-inline-content">2. <strong>Finance</strong> </p><ol><li><p class="bn-inline-content"> In the financial industry, AI is widely used for risk assessment, fraud detection, and algorithmic trading. AI systems can analyze market data in real-time to identify potential risks, thereby improving the accuracy of decision-making (Kou et al., 2020). </p></li></ol><p class="bn-inline-content">3. <strong>Education</strong> </p><ol><li><p class="bn-inline-content">AI applications in education include intelligent tutoring systems and personalized learning platforms. By analyzing students' learning behaviors, AI can provide customized learning suggestions to help students master knowledge more effectively (Luckin et al., 2016). </p></li></ol><p class="bn-inline-content">4. <strong>Transportation</strong> -Autonomous driving technology is a significant application of AI in the transportation sector. Through sensors and machine learning algorithms, autonomous vehicles can perceive their environment in real-time and make safe driving decisions (Shalev-Shwartz &#x26; Shammah, 2018).</p><p class="bn-inline-content"> Challenges Faced by Artificial Intelligence </p><p class="bn-inline-content">1. <strong>Ethical Issues</strong> </p><ol><li><p class="bn-inline-content">The decision-making process of AI often lacks transparency, leading to the "black box" problem. This reduces people's trust in AI systems, especially in critical areas such as healthcare and justice (Burrell, 2016). </p></li></ol><p class="bn-inline-content">2. <strong>Impact on Employment</strong> </p><ol><li><p class="bn-inline-content">The proliferation of AI may lead to the disappearance of certain jobs, resulting in unemployment issues. While AI will also create new job opportunities, balancing this transition remains a pressing social problem (Frey &#x26; Osborne, 2017). </p></li></ol><p class="bn-inline-content">3. <strong>Data Privacy</strong> </p><ol><li><p class="bn-inline-content">AI systems typically rely on large amounts of data for training, raising concerns about personal privacy. How to utilize data while protecting user privacy is a significant challenge in the development of AI (Zuboff, 2019). </p></li></ol><p class="bn-inline-content">Conclusion </p><p class="bn-inline-content">As a technology with immense potential, artificial intelligence is playing a crucial role in various fields. However, with the deepening of its applications, challenges such as ethics, employment, and data privacy are becoming increasingly prominent. In the future, it is essential to actively address these challenges while promoting the development of AI technology to ensure its sustainable growth. </p><p class="bn-inline-content"><strong><em><a target="_blank" rel="noopener noreferrer nofollow" href="http://www.baidu.com">test test test</a></em></strong></p><p class="bn-inline-content"></p><p class="bn-inline-content"><strong>References </strong></p><ul><li><p class="bn-inline-content">Bojarski, M., et al. (2016). End to End Learning for Self-Driving Cars. <em>arXiv preprint arXiv:1604.07316</em>. </p></li><li><p class="bn-inline-content">Burrell, J. (2016). How the machine ‘thinks’: Understanding opacity in machine learning algorithms. <em>Big Data &#x26; Society</em>, 3(1), 2053951715622512. </p></li><li><p class="bn-inline-content">Esteva, A., et al. (2019). A guide to deep learning in healthcare. <em>Nature Medicine</em>, 25(1), 24-29. </p></li><li><p class="bn-inline-content">Frey, C. B., &#x26; Osborne, M. A. (2017). The future of employment: How susceptible are jobs to computerization? <em>Technological Forecasting and Social Change</em>, 114, 254-280. </p></li><li><p class="bn-inline-content">Kou, G., et al. (2020). A survey on artificial intelligence in finance: Applications, challenges, and future directions. <em>Journal of Financial Stability</em>, 50, 100758. </p></li><li><p class="bn-inline-content">Luckin, R., et al. (2016). Intelligence unleashed: An argument for AI in education. <em>Pearson</em>. </p></li><li><p class="bn-inline-content">O'Neil, C. (2016). Weapons of Math Destruction: How Big Data Increases Inequality and Threatens Democracy. <em>Crown Publishing Group</em>. </p></li><li><p class="bn-inline-content">Shalev-Shwartz, S., &#x26; Shammah, S. (2018). On a Formal Model of Safe and Scalable Reinforcement Learning. <em>arXiv preprint arXiv:1806.09430</em>. </p></li><li><p class="bn-inline-content">Topol, E. J. (2019). Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again. <em>Basic Books</em>. </p></li><li><p class="bn-inline-content">Zuboff, S. (2019). The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power. <em>PublicAffairs</em>. </p></li></ul><p class="bn-inline-content"></p><p class="bn-inline-content"></p>`;

    const handleButtonClick = (callback) => (event) => {
        event.preventDefault();
        setTimeout(() => {
            callback();
        }, 0);
    };
    const [html, setHtml] = useState('')
    return (
        <div style={{height: '100vh'}}>
            <BlockNoteView editor={editor} />
            <div
                className={"edit-buttons"}
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    gap: "10px",
                }}>
                <button
                    className={"edit-button"}
                    onClick={handleButtonClick(insertBlockAtCursor)}>
                    插入块到光标处
                </button>
                <button
                    onClick={handleButtonClick(() =>
                        console.log(editor.getTextCursorPosition())
                    )}>
                    获取文本光标位置
                </button>
                <button
                    onClick={handleButtonClick(() => console.log(editor.getSelection()))}>
                    获取选中内容
                </button>
                <button
                    onClick={handleButtonClick(() => console.log(editor.canNestBlock()))}>
                    检查文本光标位置是否可以插入块
                </button>
                <button onClick={handleButtonClick(insertInlineContent)}>
                    插入内联的内容（包含链接）
                </button>
                <button
                    onClick={handleButtonClick(() => {
                        editor.toggleStyles({
                            bold: true,
                            italic: true,
                            textColor: "pink",
                            backgroundColor: "blue",
                            underline: true,
                        });
                    })}>
                    切换选中的样式
                </button>
                <button
                    onClick={handleButtonClick(() =>
                        editor.createLink("https://www.baidu.com/", "百度")
                    )}>
                    创建链接
                </button>
                <button
                    onClick={handleButtonClick(async () => {
                        const markdownFromBlocks = editor.blocksToMarkdownLossy();
                        const blocksFromMarkdown = editor.tryParseMarkdownToBlocks(
                            await markdownFromBlocks
                        );
                        console.log(markdownFromBlocks, blocksFromMarkdown);
                    })}>
                    转markdown
                </button>
                <button
                    onClick={handleButtonClick(async () => {
                        const HTMLFromBlocks = await editor.blocksToFullHTML(editor.document);
                        const blocksToHTMLLossy = await editor.blocksToHTMLLossy(editor.document);
                        setHtml(HTMLFromBlocks)
                        console.log('完整的', HTMLFromBlocks, blocksToHTMLLossy, editor);
                    })}>
                    导出html(结构)
                </button>
                <button
                    onClick={handleButtonClick(async () => {
                        const blocksFromHTML = await editor.tryParseHTMLToBlocks(
                            initialHTML
                        );
                        console.log(blocksFromHTML);
                        editor.replaceBlocks(editor.document, blocksFromHTML);
                    })}>
                    html转block(数据回显)
                </button>
            </div>

            <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </div>
    );
}
