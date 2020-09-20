import React, { Component } from 'react';
import './MarkdownPreviewerApp.css';
import Preview from './Preview';

class MarkdownPreviewerApp extends Component {
    constructor(props) {
    super(props);
        this.state = {
            text: `# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, \`<div></div>\`, between 2 backticks.\n\n\`\`\`\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {\n    return multiLineCode;\n  }\n}\n\`\`\`\n\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | ------------- \nYour content can | be here, and it | can be here...\nAnd here. | Okay. | I think we get it.\n\n- And of course, there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That looks like this.\n\n1. And there are numbered lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n\n![React Logo w/ Text](https://techchronos.com/wp-content/uploads/SszarkLabs/stack-icon/cywBkaGwkMeDAuJbSt1k.png)`
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            text: event.target.value,
        });
    }
    render() {
        return (
            <div className="MarkedApp">
                <header className="MarkedHeader">
                    <h1>Markdown Previewer</h1>
                </header>
                <div className="MarkedPreviewerBox">
                    <div className="TextEditor">
                        <i className="fab fa-2x fa-free-code-camp"> Editor</i>
                        <textarea id="editor" value={this.state.text} onChange={this.handleChange}/>
                    </div>
                    <div className="MarkedPreviewer">
                        <i className="fab fa-2x fa-free-code-camp"> Previewer</i>
                        <div className="PreviewSection">
                            <Preview text={this.state.text}/>
                        </div>
                    </div>
                </div>
                <footer>
                    <p>Made by <a href="https://github.com/Shaikot007" target="_blank" rel="noopener noreferrer">Shaikot</a></p>
                </footer>
            </div>
        );
    }
}

export default MarkdownPreviewerApp;