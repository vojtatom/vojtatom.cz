import "./Project.css"

interface TimelineEventProps {
    date: string;
    title: string;
}


export function TimelineEvent(props: TimelineEventProps) {
    return (
        <div className="event">
            <div className="eventTexts">
                <div className="date">{props.date}</div>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}