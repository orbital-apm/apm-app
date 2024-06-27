import { useSelector } from 'react-redux'
import type { RootState } from '@/utils/store'

export const useAppSelector = useSelector.withTypes<RootState>()
