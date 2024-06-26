An input data stream

:::warning
This page is a WIP. It contains all the information in Figura's documentation but we're working on adding more helpful descriptions.
:::

---

### <code>available()</code> \{#available}

Returns amount of bytes available

```lua
available()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>close()</code> \{#close}

Closes this input stream

```lua
close()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>isAsyncOnly()</code> \{#isAsyncOnly}

Is this stream async-only or not

```lua
isAsyncOnly()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>mark()</code> \{#mark}

Marks current position in input stream

```lua
mark(readLimit)
```

**Parameters:**

| Name      | Type                                             | Description | Default |
| --------- | ------------------------------------------------ | ----------- | ------- |
| readLimit | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>markSupported()</code> \{#markSupported}

Does this input stream supports marking or not

```lua
markSupported()
```

**Returns:**

| Type                                              | Description |
| ------------------------------------------------- | ----------- |
| <code>[Boolean](/tutorials/types/Booleans)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>read()</code> \{#read}

Reads one byte from this stream. Might throw an error if stream is async-only

```lua
read()
```

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>readAsync()</code> \{#readAsync}

Starts reading specified amount of bytes from this stream and returns future that will contain byte array of stream bytes once done

```lua
readAsync()
```

**Returns:**

| Type                                        | Description |
| ------------------------------------------- | ----------- |
| <code>[Future](/globals/Data/Future)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>reset()</code> \{#reset}

Resets input stream position to mark

```lua
reset()
```

**Returns:**

| Type             | Description |
| ---------------- | ----------- |
| <code>nil</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>skip()</code> \{#skip}

Skips specified amount of bytes in stream. Returns the actual amount of bytes skipped

```lua
skip(n)
```

**Parameters:**

| Name | Type                                             | Description | Default |
| ---- | ------------------------------------------------ | ----------- | ------- |
| n    | <code>[Integer](/tutorials/types/Numbers)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---

### <code>transferTo()</code> \{#transferTo}

Transfers left data in this input stream to provided output stream

```lua
transferTo(out)
```

**Parameters:**

| Name | Type                                                    | Description | Default |
| ---- | ------------------------------------------------------- | ----------- | ------- |
| out  | <code>[OutputStream](/globals/Data/OutputStream)</code> | -           | -       |

**Returns:**

| Type                                             | Description |
| ------------------------------------------------ | ----------- |
| <code>[Integer](/tutorials/types/Numbers)</code> | -           |

**Example:**

```lua
-- example coming soon
```

---
