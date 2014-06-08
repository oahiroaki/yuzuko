#include "list.h"

list_t *
list_new() {
  list_t *self;
  if (!(self = malloc(sizeof(list_t))))
    return NULL;
  self->head = NULL;
}

