# slidev-theme-nws

An NWS theme for [Slidev](https://sli.dev).

## Configuration

### Syntax Highlighting

At the moment, the theme `tokyo-night` needs to be added to your slides' repository manually. This is because the built-in version of the theme isn't in the dependant upstream release of Shiki yet (see also shikijs/textmate-grammars-themes#16).

To add the theme, run the following command in your slides' repository, [copy it from GitHub](https://github.com/shikijs/textmate-grammars-themes/blob/main/packages/tm-themes/themes/tokyo-night.json) and paste it into the file `styles/tokyo-night.json`.

### Footer

The footer can be configured by setting the following variables in the frontmatter of your first slide:

```yaml
twitter: your_twitter_handle
event: your_event_name
```

If you leave out one of the variables, the footer won't render the respective element.
