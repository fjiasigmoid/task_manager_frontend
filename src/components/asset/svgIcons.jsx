import { SvgIcon } from '@mui/material';

/**
 * https://fonts.google.com/icons
 * Weight: 300; Optical size: 24px
 */

export const AllIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z'
                fill='inherit'
            />
        </SvgIcon>
    );
};

export const SunIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M11.25 5.2V1.525h1.5V5.2Zm6.075 2.525L16.3 6.7l2.575-2.65 1.05 1.075ZM18.8 12.75v-1.5h3.675v1.5Zm-7.55 9.725V18.8h1.5v3.675ZM6.7 7.7 4.05 5.125l1.075-1.05 2.625 2.6Zm12.15 12.25L16.3 17.3l1-1 2.625 2.55Zm-17.325-7.2v-1.5H5.2v1.5Zm3.6 7.2-1.05-1.075L6.65 16.3l.55.5.55.525ZM12 17.5q-2.3 0-3.9-1.6T6.5 12q0-2.3 1.6-3.9T12 6.5q2.3 0 3.9 1.6t1.6 3.9q0 2.3-1.6 3.9T12 17.5Zm0-1.5q1.65 0 2.825-1.175Q16 13.65 16 12q0-1.65-1.175-2.825Q13.65 8 12 8q-1.65 0-2.825 1.175Q8 10.35 8 12q0 1.65 1.175 2.825Q10.35 16 12 16Zm0-4Z' />
        </SvgIcon>
    );
};
export const FlagFilledIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z' fill='inherit' />
        </SvgIcon>
    );
};

export const FlagOutlinedIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M5.5 20.75V4.5h8.1l.4 2h5.5v9h-6.1l-.4-2H7v7.25Zm7-10.75Zm2.15 4H18V8h-5.25l-.4-2H7v6h7.25Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};

export const CalendarIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M14.7 18q-.975 0-1.65-.675-.675-.675-.675-1.625 0-.975.675-1.65.675-.675 1.65-.675.95 0 1.625.675T17 15.7q0 .95-.675 1.625T14.7 18Zm-9.4 3.5q-.75 0-1.275-.525Q3.5 20.45 3.5 19.7V6.3q0-.75.525-1.275Q4.55 4.5 5.3 4.5h1.4V2.375h1.525V4.5H15.8V2.375h1.5V4.5h1.4q.75 0 1.275.525.525.525.525 1.275v13.4q0 .75-.525 1.275-.525.525-1.275.525Zm0-1.5h13.4q.1 0 .2-.1t.1-.2v-9.4H5v9.4q0 .1.1.2t.2.1ZM5 8.8h14V6.3q0-.1-.1-.2t-.2-.1H5.3q-.1 0-.2.1t-.1.2Zm0 0V6v2.8Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const CalendarOverdueIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M17.5,12 C20.5376,12 23,14.4624 23,17.5 C23,20.5376 20.5376,23 17.5,23 C14.4624,23 12,20.5376 12,17.5 C12,14.4624 14.4624,12 17.5,12 Z M17.5,19.875 C17.1548,19.875 16.875,20.1548 16.875,20.5 C16.875,20.8452 17.1548,21.125 17.5,21.125 C17.8452,21.125 18.125,20.8452 18.125,20.5 C18.125,20.1548 17.8452,19.875 17.5,19.875 Z M17.75,3 C19.5449,3 21,4.45507 21,6.25 L21,12.0218 C20.5368,11.7253 20.0335,11.4858 19.5,11.3135 L19.5,8.5 L4.5,8.5 L4.5,17.75 C4.5,18.7165 5.2835,19.5 6.25,19.5 L11.3135,19.5 C11.4858,20.0335 11.7253,20.5368 12.0218,21 L6.25,21 C4.45507,21 3,19.5449 3,17.75 L3,6.25 C3,4.45507 4.45507,3 6.25,3 L17.75,3 Z M17.5,14 C17.2239,14 17,14.2239 17,14.5 L17,18.5 C17,18.7761 17.2239,19 17.5,19 C17.7761,19 18,18.7761 18,18.5 L18,14.5 C18,14.2239 17.7761,14 17.5,14 Z M17.75,4.5 L6.25,4.5 C5.2835,4.5 4.5,5.2835 4.5,6.25 L4.5,7 L19.5,7 L19.5,6.25 C19.5,5.2835 18.7165,4.5 17.75,4.5 Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const ProjectIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M11 20.5H5.3q-.75 0-1.275-.525Q3.5 19.45 3.5 18.7V5.3q0-.75.525-1.275Q4.55 3.5 5.3 3.5h4.425q.2-.725.837-1.213Q11.2 1.8 12 1.8q.825 0 1.463.487.637.488.837 1.213h4.4q.75 0 1.275.525.525.525.525 1.275V10H19V5.3q0-.1-.1-.2t-.2-.1h-2.2v2.625h-9V5H5.3q-.1 0-.2.1t-.1.2v13.4q0 .1.1.2t.2.1H11Zm4.5-.925-3.9-3.9 1.05-1.075 2.85 2.85 5.675-5.65 1.05 1.05ZM12 5.125q.375 0 .637-.263.263-.262.263-.662 0-.375-.263-.638Q12.375 3.3 12 3.3t-.637.262q-.263.263-.263.638 0 .4.263.662.262.263.637.263Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const DotIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M10.021 16.812q-1.417 0-2.656-.531-1.24-.531-2.177-1.469-.938-.937-1.469-2.177-.531-1.239-.531-2.635 0-1.417.531-2.646.531-1.229 1.469-2.166.937-.938 2.177-1.469Q8.604 3.188 10 3.188q1.417 0 2.646.531 1.229.531 2.166 1.469.938.937 1.469 2.166.531 1.229.531 2.625 0 1.417-.531 2.656-.531 1.24-1.469 2.177-.937.938-2.166 1.469-1.229.531-2.625.531Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const EllipsisIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M6.225 13.5q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062Q5.6 10.5 6.225 10.5t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438Zm5.775 0q-.625 0-1.062-.438Q10.5 12.625 10.5 12t.438-1.062Q11.375 10.5 12 10.5t1.062.438q.438.437.438 1.062t-.438 1.062q-.437.438-1.062.438Zm5.775 0q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const AddIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M11.25 18.75v-6h-6v-1.5h6v-6h1.5v6h6v1.5h-6v6Z' fill='inherit' />
        </SvgIcon>
    );
};
export const EditIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M5 19h1.4l8.625-8.625-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2 1.4-1.4q.575-.575 1.413-.575.837 0 1.412.575l1.4 1.4q.575.575.6 1.388.025.812-.55 1.387ZM17.85 10.4 7.25 21H3v-4.25l10.6-10.6Zm-3.525-.725-.7-.7 1.4 1.4Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const DeleteIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21ZM17 6H7v13h10ZM9 17h2V8H9Zm4 0h2V8h-2ZM7 6v13Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const RadioButtonUncheckedIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const CheckCircleOutlineRoundedIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.35 0 5.675-2.325Q20 15.35 20 12q0-3.35-2.325-5.675Q15.35 4 12 4 8.65 4 6.325 6.325 4 8.65 4 12q0 3.35 2.325 5.675Q8.65 20 12 20Zm0-8Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const CheckCircleFillIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='m10.6 16.6 7.05-7.05-1.4-1.4-5.65 5.65-2.85-2.85-1.4 1.4ZM12 22q-2.075 0-3.9-.788-1.825-.787-3.175-2.137-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175 1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138 1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175-1.35 1.35-3.175 2.137Q14.075 22 12 22Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const ArrowForwardIosIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M8.025 22 6.25 20.225 14.475 12 6.25 3.775 8.025 2l10 10Z' fill='inherit' />
        </SvgIcon>
    );
};
export const GitHubIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const MenuIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z' />
        </SvgIcon>
    );
};
export const Brightness4Icon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M12 24.275 8.325 20.7H3.3v-5.025L-.275 12 3.3 8.325v-5.05h5.025L12-.3l3.675 3.575h5.05v5.05L24.3 12l-3.575 3.675V20.7h-5.05ZM12 12Zm0 8.325 2.45-2.45h3.45V14.45L20.35 12 17.9 9.55V6.1h-3.45L12 3.65 9.55 6.1H6.125v3.45L3.675 12l2.45 2.45v3.425H9.55Zm0-2.45q2.475 0 4.175-1.712 1.7-1.713 1.7-4.188 0-2.45-1.7-4.15-1.7-1.7-4.175-1.7-.575 0-1.125.112-.55.113-1.075.338 1.5.8 2.4 2.262.9 1.463.9 3.163 0 1.7-.9 3.162-.9 1.463-2.4 2.263.525.225 1.075.337.55.113 1.125.113Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const Brightness7Icon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='m12 23.65-3.5-3.4H3.75V15.5L.35 12l3.4-3.5V3.75H8.5L12 .35l3.5 3.4h4.75V8.5l3.4 3.5-3.4 3.5v4.75H15.5Zm0-5.55q2.55 0 4.325-1.775Q18.1 14.55 18.1 12q0-2.55-1.775-4.325Q14.55 5.9 12 5.9q-2.55 0-4.325 1.775Q5.9 9.45 5.9 12q0 2.55 1.775 4.325Q9.45 18.1 12 18.1Zm0-2.15q-1.625 0-2.787-1.163Q8.05 13.625 8.05 12t1.163-2.788Q10.375 8.05 12 8.05t2.788 1.162Q15.95 10.375 15.95 12q0 1.625-1.162 2.787Q13.625 15.95 12 15.95Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const ExitIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path
                d='M5.075 21.2q-.95 0-1.612-.662-.663-.663-.663-1.613V15.15h2.275v3.775h13.85V5.075H5.075V8.85H2.8V5.075q0-.95.663-1.613.662-.662 1.612-.662h13.85q.95 0 1.613.662.662.663.662 1.613v13.85q0 .95-.662 1.613-.663.662-1.613.662Zm5.525-3.95L9.025 15.6l2.45-2.45H2.8v-2.3h8.675L9.025 8.4 10.6 6.75 15.85 12Z'
                fill='inherit'
            />
        </SvgIcon>
    );
};
export const ChevronLeftIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <path d='m14 18-6-6 6-6 1.4 1.4-4.6 4.6 4.6 4.6Z' fill='inherit' />
        </SvgIcon>
    );
};
