// Éditeur de code basé sur CodeMirror 6 : coloration syntaxique Python,
// thème sombre façon VS Code, et Tab qui insère une indentation (4 espaces).

import { EditorView, keymap, lineNumbers, highlightActiveLine } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { syntaxHighlighting, defaultHighlightStyle } from '@codemirror/language';

/**
 * Crée un éditeur dans le conteneur donné.
 * Retourne l'EditorView (accès au code via view.state.doc.toString()).
 */
export function createEditor(container, initialCode) {
  const state = EditorState.create({
    doc: initialCode,
    extensions: [
      lineNumbers(),
      history(),
      highlightActiveLine(),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      python(),
      oneDark,
      keymap.of([...defaultKeymap, ...historyKeymap, indentWithTab]),
      EditorView.lineWrapping,
      EditorView.updateListener.of(() => {}),
    ],
  });

  const view = new EditorView({ state, parent: container });
  return view;
}
