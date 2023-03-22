import { ContentState, EditorState, convertFromHTML, convertToRaw } from 'draft-js'
import { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
import draftToHtml from 'draftjs-to-html'

const note = {
  id: '1938',
  content: '<p>This is new note 1</p>'
}

const Note = () => {
  const [editor, setEditor] = useState<EditorState>(() => EditorState.createEmpty())
  const [rawHTML, setRawHTML] = useState(note.content)

  const handleOnChange = (e: EditorState) => {
    setEditor(e)
    setRawHTML(draftToHtml(convertToRaw(e.getCurrentContent())))
  }

  useEffect(() => {
    const blocksFromHTML = convertFromHTML(note.content)
    const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap)
    setEditor(EditorState.createWithContent(state))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.id])

  useEffect(() => {
    setRawHTML(note.content)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [note.content])

  return <Editor editorState={editor} onEditorStateChange={handleOnChange} placeholder='Write something ...' />
}

export default Note
