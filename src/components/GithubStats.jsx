import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import useTheme from '../hooks/useTheme';

const GithubStats = () => {
    const [theme] = useTheme();

    return (
        <div className="flex justify-center mt-12 pb-8 text-slate-900 dark:text-white font-bold">
            <GitHubCalendar
                username="mohittiwari34"
                blockSize={12}
                blockMargin={5}
                colorScheme={theme === 'dark' ? 'dark' : 'light'}
                fontSize={16}
                theme={{
                    light: ['#d1d5db', '#40c463', '#30a14e', '#216e39', '#0e4429'],
                    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
            />
        </div>
    );
};

export default GithubStats;
