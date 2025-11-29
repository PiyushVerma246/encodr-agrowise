import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
        { text: "Hello! I'm your AgroWise assistant. How can I help you today?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        // Add user message
        setMessages((prev) => [...prev, { text: inputValue, isUser: true }]);

        // Simulate bot response
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "I'm a demo chatbot. I can't answer questions yet, but I'm here to help with the UI!", isUser: false }
            ]);
        }, 1000);

        setInputValue("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
            {/* Chat Window */}
            {isOpen && (
                <Card className="w-80 sm:w-96 shadow-2xl border-primary/20 animate-scale-in origin-bottom-right">
                    <CardHeader className="bg-primary text-primary-foreground rounded-t-xl p-4 flex flex-row items-center justify-between space-y-0">
                        <div className="flex items-center space-x-2">
                            <div className="bg-white/20 p-1.5 rounded-full">
                                <Bot className="h-5 w-5" />
                            </div>
                            <div>
                                <CardTitle className="text-base">AgroWise Assistant</CardTitle>
                                <p className="text-xs text-primary-foreground/80">Online</p>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                            onClick={toggleChat}
                        >
                            <X className="h-5 w-5" />
                        </Button>
                    </CardHeader>
                    <CardContent className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/5">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${msg.isUser
                                            ? "bg-primary text-primary-foreground rounded-br-none"
                                            : "bg-white border shadow-sm rounded-bl-none"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </CardContent>
                    <CardFooter className="p-3 border-t bg-background">
                        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
                            <Input
                                placeholder="Type your message..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                className="flex-1 focus-visible:ring-primary"
                            />
                            <Button type="submit" size="icon" className="h-10 w-10 shrink-0">
                                <Send className="h-4 w-4" />
                            </Button>
                        </form>
                    </CardFooter>
                </Card>
            )}

            {/* Toggle Button */}
            <Button
                onClick={toggleChat}
                size="icon"
                className={`h-14 w-14 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 ${isOpen ? 'rotate-90 scale-0 opacity-0' : 'scale-100 opacity-100'}`}
                style={{ position: isOpen ? 'absolute' : 'relative' }}
            >
                <MessageCircle className="h-7 w-7" />
            </Button>
        </div>
    );
};

export default Chatbot;
