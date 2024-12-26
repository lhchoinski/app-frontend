import React, { useEffect } from 'react';
import { IRootState } from '../../store';
import {useAppDispatch, useAppSelector} from "../../store/hooks";
import {setPageTitle} from "../../store/slices/core/themeConfig";
// import {useTranslation} from "react-i18next";

const Error404 = () => {
    const dispatch = useAppDispatch();

    // const { t } = useTranslation();

    useEffect(() => {
        dispatch(setPageTitle('Error 404'));
    });
    const isDark = useAppSelector(
        (state: IRootState) =>
            state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode,
    );

    return (
        <>
            <div className="flex relative min-h-screen items-center justify-center overflow-hidden">
                <div className="px-6 py-16 text-center font-semibold before:container before:absolute before:left-1/2 before:-translate-x-1/2 before:rounded-full before:bg-[linear-gradient(180deg,#4361EE_0%,rgba(67,97,238,0)_50.73%)] before:aspect-square before:opacity-10 md:py-20">
                    <div className="relative">
                        <img
                            src={
                                isDark
                                    ? '/assets/images/error/404-dark.svg'
                                    : '/assets/images/error/404-light.svg'
                            }
                            alt="404"
                            className="mx-auto -mt-10 w-full max-w-xs object-cover md:-mt-14 md:max-w-xl"
                        />
                        <p className="mt-5 text-base dark:text-white">
                            {/*{t('message.pageNotFound')}*/}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Error404;
