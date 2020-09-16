import fbIcon from '../images/icon-facebook.svg';
import twIcon from '../images/icon-twitter.svg';
import inIcon from '../images/icon-instagram.svg';
import ytIcon from '../images/icon-youtube.svg';

export const DARK_THEME_STYLES = {
    "--theme-toggle": "linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
    "--theme-bg": "hsl(230, 17%, 14%)",
    "--theme-top-bg-pattern": "hsl(232, 19%, 15%)",
    "--theme-card-bg": "hsl(228, 28%, 20%)",
    "--theme-text": "white",
    "--theme-text-secondary": "hsl(228, 34%, 66%)"
}
export const LIGHT_THEME_STYLES = {
    "--theme-toggle": "linear-gradient(to right,hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
    "--theme-bg": "hsl(0, 0%, 100%)",
    "--theme-top-bg-pattern": "hsl(225, 100%, 98%)",
    "--theme-card-bg": "hsl(227, 47%, 96%)",
    "--theme-text": "hsl(230, 17%, 14%)",
    "--theme-text-secondary": "hsl(228, 12%, 44%)"
}
export const TEXT = {
    title: "Social Media Dashboard",
    subTitle:"Total Followers: ",
    theme:"Dark Mode",
	dailyTrendLabel: "Today",
	todayOverview: "Overview - Today"
}

export const DATA_FOLLOWERS = "23,004";
export const DATA_SUMMARY = [{
	id: "fb",
	icon: fbIcon,
	name: "@nathnaf",
	sub: 1987,
	subLabel: "followers",
    dailyTrend: 12,
    socialId: "fb"
},
{
	id: "tw",
	icon: twIcon,
	name: "@nathnaf",
	sub: 1044,
	subLabel: "followers",
    dailyTrend: 99,
    socialId: "tw"
},
{
	id: "in",
	icon: inIcon,
	name: "@realnathnaf",
	sub: 11000,
	subLabel: "followers",
    dailyTrend: 1099,
    socialId: "in"
},
{
	id: "yt",
	icon: ytIcon,
	name: "@nathnaf",
	sub: 8239,
	subLabel: "subscribers",
    dailyTrend: -144,
    socialId: "yt"
}];
export const DATA_OVERVIEW =  [{
	id: "fb-page-view" ,
	icon: fbIcon,
	value: 87,
	valueLabel: "Pageview",
    percentTrend:  3,
},
{
	id: "fb-likes" ,
	icon: fbIcon,
	value: 52,
	valueLabel: "Likes",
	percentTrend:  2
},
{
	id: "in-likes" ,
	icon: inIcon,
	value: 5462,
	valueLabel: "Likes",
	percentTrend:  2
},
{
	id: "in-profile-views" ,
	icon: inIcon,
	value: 52000,
	valueLabel: "Profile Views",
	percentTrend:  1375
},
{
	id: "tw-retweets" ,
	icon: twIcon,
	value: 117,
	valueLabel: "Retweets",
	percentTrend:  303
},
{
	id: "tw-likes" ,
	icon: twIcon,
	value: 507,
	valueLabel: "Likes",
	percentTrend:  553
},
{
	id: "yt-likes" ,
	icon: ytIcon,
	value: 107,
	valueLabel: "Likes",
	percentTrend:  0
},
{
	id: "yt-total-views" ,
	icon: ytIcon,
	value: 1407,
	valueLabel: "Total Views",
	percentTrend:  -12
}];





