package com.angular.crud.service.mapper;

import com.angular.crud.domain.*;
import com.angular.crud.service.dto.BookDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Book and its DTO BookDTO.
 */
@Mapper(componentModel = "spring", uses = {AuthorMapper.class, })
public interface BookMapper extends EntityMapper <BookDTO, Book> {

    @Mapping(source = "author.id", target = "authorId")
    BookDTO toDto(Book book); 

    @Mapping(source = "authorId", target = "author")
    Book toEntity(BookDTO bookDTO); 
    default Book fromId(Long id) {
        if (id == null) {
            return null;
        }
        Book book = new Book();
        book.setId(id);
        return book;
    }
}
