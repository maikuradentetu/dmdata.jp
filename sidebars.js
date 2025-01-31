/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').Sidebars}
 */
const sidebar = {
    docs: [
        {
            type: 'category',
            label: 'マニュアル',
            link: {
                type: 'doc',
                id: 'index'
            },
            items: [
                'parameter', 'sample/javascript', 'eew', 'testing', 'payment'
            ]
        },
        {
            type: 'category',
            label: 'リファレンス',
            link: {
                type: 'doc',
                id: 'reference/index'
            },
            items: [
                {
                    type: 'category',
                    label: 'API v2',
                    link: {
                        type: 'doc',
                        id: 'reference/api/v2/index'
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Contract v2',
                            items: [
                                'reference/api/v2/contract.list'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Socket v2',
                            items: [
                                'reference/api/v2/socket.list',
                                'reference/api/v2/socket.start',
                                'reference/api/v2/socket.close'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Telegram v2',
                            items: [
                                'reference/api/v2/telegram.list',
                                'reference/api/v1/telegram.data'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'WebSocket v2',
                            items: [
                                'reference/api/v2/websocket'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Parameter v2',
                            items: [
                                'reference/api/v2/parameter.earthquake',
                                'reference/api/v2/parameter.tsunami'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'GD Earthquake v2',
                            items: [
                                'reference/api/v2/gd.earthquake.list',
                                'reference/api/v2/gd.earthquake.event'
                            ]
                        },
                        {
                            type: 'category',
                            label: 'GD Eew v2',
                            items: [
                                'reference/api/v2/gd.eew.list',
                                'reference/api/v2/gd.eew.event'
                            ]
                        }
                    ]
                },
                {
                    type: 'doc',
                    label: 'OAuth2',
                    id: 'reference/oauth2/v1/index'
                },
                {
                    type: 'doc',
                    label: 'JSON化データ',
                    id: 'reference/conversion/json/index'
                }
            ]
        },
        {
            type: 'category',
            label: '配信データ',
            link: {
                type: 'doc',
                id: 'telegrams/index'
            },
            items: [
                {
                    type: 'category',
                    label: '緊急地震（予報）区分',
                    items: [
                        'telegrams/ew09010',
                        'telegrams/ew09030',
                        'telegrams/ew09040'
                    ]
                },
                {
                    type: 'category',
                    label: '緊急地震（警報） 区分',
                    items: [
                        'telegrams/ew09020'
                    ]
                },
                {
                    type: 'category',
                    label: '緊急地震（リアルタイム震度） 区分',
                    items: [
                        'telegrams/ew09080'
                    ]
                },
                {
                    type: 'category',
                    label: '地震津波 区分',
                    items: [
                        'telegrams/et01010',
                        'telegrams/et01110',
                        'telegrams/et01120',
                        'telegrams/et01121',
                        'telegrams/et01130',
                        'telegrams/et01310',
                        'telegrams/et01320',
                        'telegrams/et01330',
                        'telegrams/et01340',
                        'telegrams/et01350',
                        'telegrams/et01360',
                        'telegrams/et01370',
                        'telegrams/et01380',
                        'telegrams/et01410',
                        'telegrams/et01420',
                        'telegrams/et01421'
                    ]
                },
                {
                    type: 'category',
                    label: '火山 区分',
                    items: [
                        'telegrams/vo01020',
                        'telegrams/vo01710',
                        'telegrams/vo01720',
                        'telegrams/vo01730',
                        'telegrams/vo01740',
                        'telegrams/vo01750',
                        'telegrams/vo01810',
                        'telegrams/vo01820',
                        'telegrams/vo01830'
                    ]
                },
                {
                    type: 'category',
                    label: '気象警報・注意報 区分',
                    items: [
                        'telegrams/we02010',
                        'telegrams/we02050',
                        'telegrams/we02020',
                        'telegrams/we02030',
                        'telegrams/we02210',
                        'telegrams/we02220',
                        'telegrams/we02230',
                        'telegrams/we02310',
                        'telegrams/we02320',
                        'telegrams/we02330',
                        'telegrams/we02410',
                        'telegrams/we02420',
                        'telegrams/we02430',
                        'telegrams/we02560',
                        'telegrams/we02520',
                        'telegrams/we02521',
                        'telegrams/we02530',
                        'telegrams/we02540',
                        'telegrams/we02550',
                        'telegrams/we02551',
                        'telegrams/we02610',
                        'telegrams/we02620',
                        'telegrams/we02630',
                        'telegrams/we02650',
                        'telegrams/we02660',
                        'telegrams/we02670',
                        'telegrams/we02690',
                        'telegrams/we02695',
                        'telegrams/we02691',
                        'telegrams/we02680',
                        'telegrams/we02710',
                        'telegrams/we02810'
                    ]
                },
                {
                    type: 'category',
                    label: '定時・その他 区分',
                    items: [
                        'telegrams/sc02070',
                        'telegrams/sc02110',
                        'telegrams/sc02115',
                        'telegrams/sc02120'
                    ]
                }
            ]
        }
    ]
};

module.exports = sidebar;
