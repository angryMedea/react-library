package com.pageturner.spring_boot_library.controller;

import com.pageturner.spring_boot_library.entity.Book;
import com.pageturner.spring_boot_library.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {
    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook (@RequestParam Long bookId) throws Exception {
        String userEmail = "testuser@gmail.com";
        return bookService.checkoutBook(userEmail, bookId);
    }


}
