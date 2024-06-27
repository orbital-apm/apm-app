import { useDispatch } from 'react-redux'
import type { AppDispatch } from '@/utils/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()