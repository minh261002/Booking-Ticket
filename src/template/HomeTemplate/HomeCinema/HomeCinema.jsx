import { useState } from 'react';
import { Tabs } from 'antd';

const HomeCinema = () => {
    const [tabPosition] = useState('left');
    return (
        <div className='container-custom tab-cinema'>
            <Tabs
                tabPosition={tabPosition}

                items={new Array(3).fill(null).map((_, i) => {

                    const id = String(i + 1);
                    return {
                        label: `Tab ${id}`,
                        key: id,
                        children: `Content of Tab ${id}`,
                    };
                })}
            />
        </div>
    );
};

export default HomeCinema;