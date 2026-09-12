export type DocKind = 'canvas' | 'markdown' | 'html' | 'json'

const HTML_HINT =
  /^\s*(<!doctype html|<html[\s>]|<svg[\s>]|<!--)/i

export function detectKind(source: string, fileName?: string | null): DocKind {
  const name = (fileName ?? '').toLowerCase()
  if (name.endsWith('.json')) return 'json'
  if (name.endsWith('.html') || name.endsWith('.htm') || name.endsWith('.svg'))
    return 'html'
  if (name.endsWith('.md') || name.endsWith('.markdown')) return 'markdown'
  if (name.endsWith('.canvas.tsx') || name.endsWith('.tsx')) return 'canvas'
  if (/from\s*['"]cursor\/canvas['"]/.test(source)) return 'canvas'
  if (HTML_HINT.test(source.trim())) return 'html'
  const trimmed = source.trim()
  if (
    (trimmed.startsWith('{') && trimmed.endsWith('}')) ||
    (trimmed.startsWith('[') && trimmed.endsWith(']'))
  ) {
    try {
      JSON.parse(trimmed)
      return 'json'
    } catch {
      /* fall through */
    }
  }
  return 'markdown'
}

export function storageExt(kind: DocKind): string {
  switch (kind) {
    case 'markdown':
      return 'md'
    case 'html':
      return 'html'
    case 'json':
      return 'json'
    default:
      return 'canvas.tsx'
  }
}

export function defaultFileName(kind: DocKind, prefix = 'shared'): string {
  return `${prefix}.${storageExt(kind)}`
}

export function kindLabel(kind: DocKind): string {
  switch (kind) {
    case 'markdown':
      return 'markdown'
    case 'html':
      return 'html'
    case 'json':
      return 'json'
    default:
      return 'canvas'
  }
}

export function acceptAttr() {
  return '.tsx,.canvas.tsx,.md,.markdown,.html,.htm,.svg,.json,text/plain,text/markdown,text/html,application/json'
}

export function isAllowedFile(file: File | string) {
  const lower = (typeof file === 'string' ? file : file.name).toLowerCase()
  return (
    lower.endsWith('.md') ||
    lower.endsWith('.markdown') ||
    lower.endsWith('.tsx') ||
    lower.endsWith('.canvas.tsx') ||
    lower.endsWith('.html') ||
    lower.endsWith('.htm') ||
    lower.endsWith('.svg') ||
    lower.endsWith('.json')
  )
}
