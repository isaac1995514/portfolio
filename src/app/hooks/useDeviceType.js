import { useState, useEffect} from 'react'


/**
 * This hook is mainly used to determin if the user is on a mobile device or not to disable
 * certain animations and other things that may not work well on mobile devices.
 */
export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState(null);
    
    useEffect(() => {
        const userAgent = window.navigator.userAgent;
        const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
        setDeviceType(mobile ? 'mobile' : 'desktop');
    }, []);
    
    return {
        isMobile: deviceType === 'mobile',
    };

}

