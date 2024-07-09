import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import 'react-tooltip/dist/react-tooltip.css'
import {Tooltip} from 'react-tooltip'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import DangerButton from "@/Components/DangerButton.jsx";

export default function Date({post}) {
    dayjs.extend(advancedFormat);
    dayjs.extend(relativeTime);
    return (
        <span className={"text-xs text-gray-500"}>
            submitted{" "}

            <span className={""}
                  data-tooltip-id={"my-tooltip"}
                  data-tooltip-content={dayjs(post.created_at).format(`dddd, MMMM Do, YYYY`)
                      + ' at ' +
                      dayjs(post.created_at).format(`h:mm A`)}
            >
            <Tooltip id="my-tooltip"/>

                {dayjs(post.created_at).fromNow()}
        </span>
            {" by " + post.author.name}
        </span>
    )
}
