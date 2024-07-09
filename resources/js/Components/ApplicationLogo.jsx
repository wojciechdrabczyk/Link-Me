export default function ApplicationLogo(props) {
    return (
        <svg {...props}  xmlns="http://www.w3.org/2000/svg" width="110" height="60" viewBox="0 0 130 60">
            <rect width="110" height="60" fillOpacity={0} fill="#FFF"/>
            <text x="87" y="37" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold"
                  fill="#333333">Link It
            </text>
            <line x1="20" y1="20" x2="40" y2="20" stroke="#FF6347" strokeWidth="2"/>
            <line x1="40" y1="20" x2="50" y2="30" stroke="#FF6347" strokeWidth="2"/>
            <line x1="50" y1="30" x2="40" y2="40" stroke="#FF6347" strokeWidth="2"/>
            <line x1="40" y1="40" x2="20" y2="40" stroke="#FF6347" strokeWidth="2"/>
            <line x1="20" y1="40" x2="10" y2="30" stroke="#FF6347" strokeWidth="2"/>
            <line x1="10" y1="30" x2="20" y2="20" stroke="#FF6347" strokeWidth="2"/>
        </svg>

    );
}
