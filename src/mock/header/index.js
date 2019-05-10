import React from 'react'

const MockMenus = [
  {
    id: 1,
    title: 'Dashboard',
    submenus: [
      {
        id: '1-1',
        title: '分析页',
        to: '/1-1',
      },
      {
        id: '1-2',
        title: '监控页',
        to: '/1-2',
      },
      {
        id: '1-3',
        title: '工作台',
        to: '/1-3',
      }
    ],
    icon: <svg viewBox="64 64 896 896" data-icon="dashboard" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M924.8 385.6a446.7 446.7 0 0 0-96-142.4 446.7 446.7 0 0 0-142.4-96C631.1 123.8 572.5 112 512 112s-119.1 11.8-174.4 35.2a446.7 446.7 0 0 0-142.4 96 446.7 446.7 0 0 0-96 142.4C75.8 440.9 64 499.5 64 560c0 132.7 58.3 257.7 159.9 343.1l1.7 1.4c5.8 4.8 13.1 7.5 20.6 7.5h531.7c7.5 0 14.8-2.7 20.6-7.5l1.7-1.4C901.7 817.7 960 692.7 960 560c0-60.5-11.9-119.1-35.2-174.4zM761.4 836H262.6A371.12 371.12 0 0 1 140 560c0-99.4 38.7-192.8 109-263 70.3-70.3 163.7-109 263-109 99.4 0 192.8 38.7 263 109 70.3 70.3 109 163.7 109 263 0 105.6-44.5 205.5-122.6 276zM623.5 421.5a8.03 8.03 0 0 0-11.3 0L527.7 506c-18.7-5-39.4-.2-54.1 14.5a55.95 55.95 0 0 0 0 79.2 55.95 55.95 0 0 0 79.2 0 55.87 55.87 0 0 0 14.5-54.1l84.5-84.5c3.1-3.1 3.1-8.2 0-11.3l-28.3-28.3zM490 320h44c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-44c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8zm260 218v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8zm12.7-197.2l-31.1-31.1a8.03 8.03 0 0 0-11.3 0l-56.6 56.6a8.03 8.03 0 0 0 0 11.3l31.1 31.1c3.1 3.1 8.2 3.1 11.3 0l56.6-56.6c3.1-3.1 3.1-8.2 0-11.3zm-458.6-31.1a8.03 8.03 0 0 0-11.3 0l-31.1 31.1a8.03 8.03 0 0 0 0 11.3l56.6 56.6c3.1 3.1 8.2 3.1 11.3 0l31.1-31.1c3.1-3.1 3.1-8.2 0-11.3l-56.6-56.6zM262 530h-80c-4.4 0-8 3.6-8 8v44c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8v-44c0-4.4-3.6-8-8-8z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 2,
    title: '表单页',
    submenus: [
      {
        id: '2-1',
        title: '基础表单',
        to: '/2-1',
      },
      {
        id: '2-2',
        title: '分步表单',
        to: '/2-2',
      },
      {
        id: '2-3',
        title: '高级表单',
        to: '/2-3',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="form" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"></path><path d="M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 0 0-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 3,
    title: '列表页',
    submenus: [
      {
        id: '3-1',
        title: '查询表格',
        to: '/3-1',
      },
      {
        id: '3-2',
        title: '标准列表',
        to: '/3-2',
      },
      {
        id: '3-3',
        title: '卡片列表',
        to: '/3-3',
      },
      {
        id: '3-4',
        title: '标准列表',
        to: '/3-4',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="table" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 4,
    title: '详情页',
    submenus: [
      {
        id: '4-1',
        title: '基础详情页',
        to: '/4-1',
      },
      {
        id: '4-2',
        title: '高级详情页',
        to: '/4-2',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="profile" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zM340 368a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0zm0 144a40 40 0 1 0 80 0 40 40 0 1 0-80 0z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 5,
    title: '结果页',
    submenus: [
      {
        id: '5-1',
        title: '成功页',
        to: '/5-1',
      },
      {
        id: '5-2',
        title: '失败页',
        to: '/5-2',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="check-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 6,
    title: '异常页',
    submenus: [
      {
        id: '6-1',
        title: '403',
        to: '/6-1',
      },
      {
        id: '6-2',
        title: '404',
        to: '/6-2',
      },
      {
        id: '6-3',
        title: '500',
        to: '/6-3',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="warning" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M464 720a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 7,
    title: '个人页',
    submenus: [
      {
        id: '7-1',
        title: '个人中心',
        to: '/7-1',
      },
      {
        id: '7-2',
        title: '个人设置',
        to: '/7-2',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="user" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  },
  {
    id: 8,
    title: '图形编辑器',
    submenus: [
      {
        id: '8-1',
        title: '流程编辑器',
        to: '/8-1',
      },
      {
        id: '8-2',
        title: '脑图编辑器',
        to: '/8-2',
      },
      {
        id: '8-3',
        title: '拓扑编辑器',
        to: '/8-3',
      }
    ],
    icon: <svg viewBox="64 64 896 896" className="" data-icon="highlight" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M957.6 507.4L603.2 158.2a7.9 7.9 0 0 0-11.2 0L353.3 393.4a8.03 8.03 0 0 0-.1 11.3l.1.1 40 39.4-117.2 115.3a8.03 8.03 0 0 0-.1 11.3l.1.1 39.5 38.9-189.1 187H72.1c-4.4 0-8.1 3.6-8.1 8V860c0 4.4 3.6 8 8 8h344.9c2.1 0 4.1-.8 5.6-2.3l76.1-75.6 40.4 39.8a7.9 7.9 0 0 0 11.2 0l117.1-115.6 40.1 39.5a7.9 7.9 0 0 0 11.2 0l238.7-235.2c3.4-3 3.4-8 .3-11.2zM389.8 796.2H229.6l134.4-133 80.1 78.9-54.3 54.1zm154.8-62.1L373.2 565.2l68.6-67.6 171.4 168.9-68.6 67.6zM713.1 658L450.3 399.1 597.6 254l262.8 259-147.3 145z"></path></svg>,
    icon_right_bottom: <svg t="1557471198883" viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>,
    icon_right_top: <svg t="1557471198883" style={{transform: 'rotate(-180deg)'}} viewBox="0 0 1024 1024"  p-id="1975" width="1em" height="1em"><defs><style type="text/css"></style></defs><path d="M533.47783111 696.12316445l325.24174222-325.24174223c12.43477333-12.43477333 12.43477333-33.37557333 0-46.46343111-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0l-302.336 302.336-301.02528-301.02528c-12.43477333-12.43477333-33.37557333-12.43477333-46.46343111 0-12.43477333 12.43477333-12.43477333 33.37557333 0 46.46343111l323.92874667 323.92874667c13.74094222 13.08672 34.02865778 13.08672 47.12448 0Z" fill="currentColor" p-id="1976"></path></svg>
  }
]

export default MockMenus