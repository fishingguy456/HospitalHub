import Grid_Setup
import pygame, pygame.font, pygame.event, pygame.draw
from pygame.locals import *

pygame.init()

Black = [0, 0, 0]
White = [255, 255, 255]
Red = [255, 0, 0]
Green = [0, 255, 0]
Blue = [0, 0, 255]
Light_Blue = [102, 255, 255]


grid, gridStatus, hospitals, locations, xMax, xMin, yMax, yMin, = Grid_Setup.buildGrid()

arial_font = pygame.font.SysFont('arial', 30)
arial_font_small = pygame.font.SysFont('arial', 18)


sizex = 1500
sizey = 1000

win = pygame.display.set_mode((sizex, sizey))

gridy = len(grid)
gridx = len(grid[0])

#print(gridStatus)


def redraw_game_window():
    win.fill(Black)
    drawcolors()
    drawH()

    pygame.display.update()

def drawcolors():
    for y in range(gridy):
        for x in range(gridx):
            pygame.draw.rect(win, (round((1-gridStatus[y][x])*255), round(gridStatus[y][x]*255), 0), (round(sizex/gridx)*x, round(sizey/gridy)*y, round(sizex/gridx), round(sizey/gridy)))

def drawH():
    for i in range(len(hospitals)):
        txtSurface = arial_font.render(hospitals[i], True, Black)
        win.blit(txtSurface, (sizex*(locations[i][0]-xMin)/(xMax - xMin), sizey*(locations[i][1]-yMin)/(yMax - yMin)))


inPlay = True

while inPlay:
    redraw_game_window()

    clickPos = pygame.mouse.get_pos()
    pygame.time.delay(10)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            inPlay = False
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                inPlay = False

pygame.quit()
