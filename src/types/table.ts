export interface HeaderProps<T> {
  id: T | ''
  title: string
  width: string
  // value: T
  position?: 'left' | 'center' | 'right'
}
