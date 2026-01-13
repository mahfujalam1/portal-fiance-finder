"use client"

import { useState, useRef, useEffect } from "react"
import { X, Send } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
    id: string
    text: string
    time: string
    date: string
    isSent: boolean
    seen?: boolean
}

interface ChatWindowProps {
    chat: {
        id: string
        name: string
        avatar: string
    }
    onClose: () => void
}

export function ChatWindow({ chat, onClose }: ChatWindowProps) {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
            time: "1:58 pm",
            date: "27 April, 2022",
            isSent: false,
            seen: false,
        },
        {
            id: "2",
            text: "Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
            time: "2:15 pm",
            date: "Today",
            isSent: true,
            seen: true,
        },
    ])
    const [inputValue, setInputValue] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSend = () => {
        if (inputValue.trim()) {
            const now = new Date()
            const timeString = now.toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            }).toLowerCase()

            const newMessage: Message = {
                id: Date.now().toString(),
                text: inputValue,
                time: timeString,
                date: "Today",
                isSent: true,
                seen: false,
            }
            setMessages([...messages, newMessage])
            setInputValue("")

            // Simulate message being seen after 2 seconds
            setTimeout(() => {
                setMessages(prev => prev.map(msg =>
                    msg.id === newMessage.id ? { ...msg, seen: true } : msg
                ))
            }, 2000)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }

    return (
        <div className="fixed right-1/4 bottom-1 w-80 h-[550px] bg-white rounded-lg shadow-2xl z-auto flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-3 flex items-center justify-between bg-box-gradient">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Avatar className="w-12 h-12 border-2 border-white">
                            <AvatarImage src={chat.avatar} />
                            <AvatarFallback className="bg-blue-300 text-white">
                                {chat.name.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div className="absolute -top-1 -left-1 bg-[#346FB7] text-white text-[10px] font-bold px-1.5 py-0.5 rounded transform -rotate-12">
                            PREMIUM
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-white text-sm leading-tight">{chat.name}</p>
                        <p className="text-xs text-white/95 leading-tight">ID: SH79102029</p>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="text-white hover:bg-blue-400 h-8 w-8 shrink-0"
                >
                    <X className="h-5 w-5" />
                </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message, index) => {
                    const showDate = index === 0 || messages[index - 1].date !== message.date

                    return (
                        <div key={message.id}>
                            {showDate && (
                                <div className="flex justify-center my-3">
                                    <span className="bg-white px-3 py-1 rounded-full text-xs text-gray-600 font-medium shadow-sm">
                                        {message.date}
                                    </span>
                                </div>
                            )}

                            {!message.isSent ? (
                                <div className="flex gap-2 mb-4">
                                    <Avatar className="w-8 h-8 shrink-0">
                                        <AvatarImage src={chat.avatar} />
                                        <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col max-w-[75%]">
                                        <div className="bg-box-gradient text-white rounded-2xl rounded-tl-sm p-3 shadow-sm">
                                            <p className="text-sm leading-relaxed">{message.text}</p>
                                        </div>
                                        <span className="text-xs text-gray-500 mt-1 ml-2">{message.time}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex gap-2 mb-4 justify-end">
                                    <div className="flex flex-col max-w-[75%] items-end">
                                        <div className="bg-white border border-gray-200 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                                            <p className="text-sm leading-relaxed text-gray-800">{message.text}</p>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 mr-2">
                                            <span className="text-xs text-gray-500">{message.time}</span>
                                            {message.seen && (
                                                <Avatar className="w-3 h-3 ml-1">
                                                    <AvatarImage src={chat.avatar} />
                                                    <AvatarFallback className="text-[6px]">{chat.name.charAt(0)}</AvatarFallback>
                                                </Avatar>
                                            )}
                                        </div>
                                    </div>
                                    <Avatar className="w-8 h-8 shrink-0">
                                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=You" />
                                        <AvatarFallback className="bg-blue-400 text-white">Y</AvatarFallback>
                                    </Avatar>
                                </div>
                            )}
                        </div>
                    )
                })}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t shrink-0">
                <div className="flex gap-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Reply"
                        className="flex-1 rounded-full border-gray-300 focus:border-blue-400 focus:ring-blue-400 text-sm"
                    />
                    <Button
                    variant={'default'}
                        onClick={handleSend}
                        size="icon"
                        className="rounded-full"
                    >
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}