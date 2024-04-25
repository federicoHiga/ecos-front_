/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react"
import "./styles.css"
import ChatMessage from "../Message"
import {
  Avatar,
  IconButton,
  Stack,
  Typography,
  useScrollTrigger,
  useTheme,
} from "@mui/material"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import CancelIcon from "@mui/icons-material/Cancel"
import useGetWithoutEffect from "../../../utils/services/hooks/useGetWithoutEffect"

const Chat = ({ handleClose }) => {
  const theme = useTheme()
  const [conversationArray, setConversationArray] = useState([])
  const [firstQuestions, setFirstQuestion] = useState(false)
 
  const handleClick = () => {
    handleClose()
  }

  useEffect(() => {
    const findQuestion = async () => {
      try {
        if (firstQuestions) return
        const { data } = await useGetWithoutEffect({ url: "chat/initial" })
        setConversationArray([{ type: "user", data: data?.data }])
        setFirstQuestion(true)
      } catch (error) {
        console.log(error)
      }
    }
    findQuestion()
  }, [firstQuestions])

  const handlerFindAnswer = async (id) => {
    try {
      console.log(id)
      const { data } = await useGetWithoutEffect({ url: `chat/answer/${id}` })

      setConversationArray([
        ...conversationArray,
        { type: "chat", data: data?.data }     ])
    } catch (error) {
      console.log(error)
    }
  }
const handlerPushNewQuestion = () =>{
    setConversationArray([
        ...conversationArray,
        { type: "user", data: conversationArray[0]?.data }     ])
}

  return (
    <div className="chat-section">
      <Stack
        direction={"column"}
        justifyContent={"center"}
        alignItems={"stretch"}
        spacing={0}
        className="chat-layout"
      >
        <section className="chat-header">
          <div className="chat-title">
            <Avatar
              sx={{
                backgroundColor: "rgba(0,0,0,0)",
                border: "1px solid white",
              }}
            >
              <SmartToyIcon
                sx={{ fontSize: "1.5rem", color: theme.palette.blanco.main }}
              />
            </Avatar>
            <Typography
              variant="subtitulos"
              sx={{
                color: theme.palette.blanco.main,
                fontWeight: 400,
                ml: 1.5,
              }}
            >
              ECO-bot
            </Typography>
          </div>
          <div className="chat-close">
            <IconButton aria-label="chat-close" onClick={handleClick}>
              <CancelIcon
                sx={{ color: theme.palette.blanco.main, fontSize: "1.5rem" }}
              />
            </IconButton>
          </div>
        </section>
        <section className="chat-content">
          {conversationArray?.map((conversation) => {
            return (
              <ChatMessage
                user={conversation.type == "user" ? "user" : null}
                listQuestions={
                  conversation.type === "user" ? conversation.data : null
                }
                handlerFindAnswer={conversation.type === "user" ? handlerFindAnswer : null}
                answer={conversation.type === "chat" ? conversation?.data?.answer : null}
                handlerPushNewQuestion={handlerPushNewQuestion}
              />
            )
          })}
        </section>
      </Stack>
    </div>
  )
}

export default Chat
