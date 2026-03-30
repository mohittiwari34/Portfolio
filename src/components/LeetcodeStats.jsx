import React from 'react';
import { Leetcodecalendar } from 'react-leetcode-calendar';
import useTheme from '../hooks/useTheme';

const LeetcodeStats = () => {
    const [theme] = useTheme();

    // The wrapper library may or may not support all react-activity-calendar props, 
    // but we'll try to pass formatting if it does.
    return (
        <div className="flex justify-center mt-12 pb-8 text-slate-900 dark:text-white font-bold overflow-x-auto">
            <div className="min-w-fit flex flex-col items-center">
                <Leetcodecalendar
                    username="mohit_tiwari44"
                    size="large"
                    showTitle={true}
                    colors={{
                        noActivity: theme === 'dark' ? '#2c3338' : '#ebedf0',
                        activity: theme === 'dark' 
                            ? ['#0e4429', '#006d32', '#26a641', '#39d353'] 
                            : ['#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        text: theme === 'dark' ? '#e2e8f0' : '#475569',
                        background: 'transparent',
                        calendarBackground: 'transparent'
                    }}
                />
            </div>
        </div>
    );
};

export default LeetcodeStats;
