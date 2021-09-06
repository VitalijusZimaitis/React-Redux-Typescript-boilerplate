import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { IAppState, TAppDispatch } from './types';

export const useAppDispatch = () => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
