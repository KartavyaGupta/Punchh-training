//'', 'none' means not required. used in gift_card, online_ordering.
export default {
	button: ['round_corner', 'rect', 'capsule', 'trapezoid', 'diamond', 'trapezoid_top', 'image'],
	background: { default: 'image|color', reward: 'image|color' },
	form_input: ['round_corner', 'rect', 'underline', 'leftline'],
	gift_card: ['', 'none', 'braintree', 'payeezy', 'heartland', 'world_pay', 'web'],
	online_ordering: ['', 'none', 'native_olo', 'web_olo'],
	map_pin: ['basic', 'barbecue', 'cafe', 'chinese', 'ice_cream', 'drinks', 'casual', 'burger', 'dining', 'pizza'],
	reward_meter: [
		{
			type: 'horizontal_strip',
			bgColor: 'rgb(234, 183, 106)',
			fgColor: 'rgb(210, 137, 16)',
			textColor: 'rgb(255,255,255)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'vertical_fill',
			bgColor: 'rgb(255, 255, 255)',
			fgColor: 'rgb(201, 11, 13)',
			textColor: 'rgb(201, 11, 13)',
			variant: 'bucket',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'vertical_fill',
			bgColor: 'rgb(255, 255, 255)',
			fgColor: 'rgb(255, 255, 255)',
			textColor: 'rgb(255, 255, 255)',
			variant: 'burger',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'horizontal_fill',
			bgColor: 'rgb(0, 0, 0)',
			fgColor: 'rgb(255, 255, 255)',
			textColor: 'rgb(255, 255, 255)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'arc',
			bgColor: 'rgb(210, 137, 16)',
			fgColor: 'rgb(255, 255, 255)',
			textColor: 'rgb(255, 255, 255)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'semi_circle',
			bgColor: 'rgb(255, 255, 255)',
			fgColor: 'rgb(91, 10, 7)',
			textColor: 'rgb(91, 10, 7)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'pie',
			bgColor: 'rgb(0,0,0)',
			fgColor: 'rgb(0,0,0)',
			textColor: 'rgb(255, 255, 255)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'vertical_strip',
			bgColor: 'rgb(133, 9, 6)',
			fgColor: 'rgb(255, 255, 255)',
			textColor: 'rgb(0,0,0)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'zoom_out',
			bgColor: 'rgb(255, 255, 255)',
			fgColor: 'rgb(0,0,0)',
			textColor: 'rgb(255,255,255)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		},
		{
			type: 'circular',
			bgColor: 'rgb(255, 255, 255)',
			fgColor: 'rgb(234, 183, 106)',
			textColor: 'rgb(0,0,0)',
			variant: '',
			useMeterBg: false,
			useMeterFg: false
		}
	],
	rewards_program: ['point_based', 'visit_based', 'surprise_delight', 'points_unlock', 'banked_currency'],
	more_type: [
		'rect_corner_list',
		'round_corner_list',
		'curve_corner_list',
		'circular_grid',
		'rect_grid',
		'trapezoid_grid',
		'curve_grid',
		'trapezoid_top_grid'
	],
	tab: ['linear', 'left_tilted', 'right_tilted', 'top_diamond', 'top_circle', 'top_oval', 'underline', 'round_corner']
};
